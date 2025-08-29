'use server';

import {JWTPayload, jwtVerify, SignJWT} from 'jose';
import {cookies} from 'next/headers';
import {HttpError} from '@util/exception/httpError';
import {UserType} from "@util/pgclient";

import {ActionResponse} from "@util/types";
import {addUserLogEntry} from "@util/logActions";

export interface SessionPayload extends JWTPayload {
    userID: number,
    userType: UserType,
    // expiresAt: Date
}

const secretKey = process.env.SESSION_SECRET;
const encodedKey = new TextEncoder().encode(secretKey);

export async function encrypt(payload: SessionPayload) {
    return new SignJWT(payload)
        .setProtectedHeader({alg: 'HS256'})
        .setIssuedAt()
        .setExpirationTime('7d')
        .sign(encodedKey);
}

export async function decrypt(session: string | undefined = '') {
    try {
        const {payload} = await jwtVerify(session, encodedKey, {
            algorithms: ['HS256'],
        });
        return payload;
    } catch (error: unknown) {
        if (error instanceof Error) {
            throw HttpError.Unauthorized(`Failed to verify session - Please login. Error: ${error.message} ${session}`);
        }
        throw HttpError.Unauthorized('Failed to verify session - Please login');
    }
}

export async function startSession(userID: number, userType: UserType, expiresInDays = 360) {
    const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * expiresInDays);

    const sessionData: SessionPayload = {
        userID,
        userType,
        // expiresAt
    };

    // Encrypt the session ID
    const session = await encrypt(sessionData);

    // Store the session in cookies for optimistic auth checks
    const cookieStore = await cookies();
    cookieStore.set('session', session, {
        httpOnly: true,
        secure: true,
        expires: expiresAt,
        sameSite: 'strict',
        path: '/',
    });
}

export async function endSession() {
    const session = await decryptSession();
    const cookieStore = await cookies();
    cookieStore.delete('session');
    return session;
}

export async function getSessionCookie() {
    return (await cookies()).get('session')?.value;
}

export async function decryptSession() {
    const cookie = await getSessionCookie();
    return await decrypt(cookie) as SessionPayload;
}

export async function validateSession() {
    const session = await decryptSession();
    if (!session || !session.userID) throw HttpError.Unauthorized('Unauthorized - Please login');
    return session;
}

/** Server Actions **/

export async function logoutAction(): Promise<ActionResponse> {
    try {
        const oldSession = await endSession();
        const {userID} = oldSession;

        // Add a log entry
        await addUserLogEntry(userID, 'log-out');
    } catch (e: unknown) {
        console.error('Error logging out: ', e);
    }
    return {
        status: 'success',
        message: 'Log out successful. Redirecting...',
        redirectURL: '/login'
    };
}
