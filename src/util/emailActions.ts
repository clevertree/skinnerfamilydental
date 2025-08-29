'use server';

import {addUserLogEntry} from '@util/logActions';
import {startSession} from '@util/session';
import {randomInt} from 'node:crypto';
import {Op} from 'sequelize';
import {User, User2FactorCode} from "@util/pgclient";
import User2FactorEmailTemplate from "@template/email/User2FactorEmailTemplate";
import {sendMail} from "@util/mail";
import {ActionResponse} from "@util/types";


export async function loginEmailAction(email: string): Promise<ActionResponse> {
    // const redisPasswordResetKey = `user:${email.toLowerCase()}:reset-password`;
    // await redisClient.set(redisPasswordResetKey, resetCode, { EX: 60 * 15 });

    const testMode = process.env.TEST_MODE !== 'false';
    const twoFactorResult = await User2FactorCode.findOne({
        where: {
            type: 'email',
            receiver: email.toLowerCase(),
            expiration: {
                [Op.gt]: new Date()
            }
        }
    })
    if (twoFactorResult) {
        console.log('Email 2-Factor re-requested: ', email, twoFactorResult);
        return {
            status: 'success',
            message: 'A code has been sent to your email. Please enter it to continue',
            redirectURL: `/login/validate/email?email=${email}${
                testMode ? `&code=${twoFactorResult.code}` : ''}`
        };
    }

    const loginCode = randomInt(100000, 999999 + 1);

    const validationURL = `${process.env.NEXT_PUBLIC_BASE_URL}/login/validate/email/?email=${email}&code=${loginCode}`;
    try {
        const emailTemplate = User2FactorEmailTemplate(email, loginCode, validationURL);
        const emailResult = await sendMail(emailTemplate);
        if (!emailResult.success) {
            return {
                status: 'error',
                message: 'Unable to send email. Please try again later',
            };
        }
        console.log('Sent email: ', emailTemplate.subject);
    } catch (e: unknown) {
        console.error('Unable to send email: ', e);
        return {
            status: 'error',
            message: 'Unable to send email. Please try again later',
        };
    }

    // Store validation code
    await User2FactorCode.create({
        type: 'email',
        receiver: email.toLowerCase(),
        code: loginCode,
        expiration: new Date(Date.now() + 5 * 60 * 1000)
    })
    // await add2FACode('email', email.toLowerCase(), loginCode);

    return {
        status: 'success',
        message: 'A code has been sent to your email. Please enter it to continue',
        redirectURL: `/login/validate/email?email=${email}${
            testMode ? `&code=${loginCode}` : ''}`,
    };
}

export async function loginEmailValidationAction(
    email: string,
    code: number
): Promise<ActionResponse> {
    const twoFactorResult = await User2FactorCode.findOne({
        where: {
            type: 'email',
            receiver: email.toLowerCase(),
            expiration: {
                [Op.gt]: new Date()
            }
        }
    })
    if (!twoFactorResult || (twoFactorResult.code !== code)) {

        console.error('Invalid email login request:', email, code, twoFactorResult);
        // Add an error log entry
        await addUserLogEntry(null, 'log-in-error', 'Invalid email login request');
        return {
            message: 'Invalid login request',
            status: 'error',
        };
    }

    // Delete Login Request
    await User2FactorCode.destroy({
        where: {
            type: 'email',
            receiver: email.toLowerCase(),
        }
    })

    // Fetch user from the database
    let loginUser = await User.findOne({
        where: {
            email: email.toLowerCase(),
        },
    })
    let userID: number = -1;
    if (loginUser) {
        // User already exists
        userID = loginUser.id;
        // Add a log entry
        await addUserLogEntry(userID, 'log-in');
    } else {
        // Register a new user
        loginUser = await User.create({
            email: email.toLowerCase(),
            type: 'user',
            status: 'registered',
            created_at: new Date(),
        })
        userID = loginUser.id;
        console.log(`Registered a new user (${userID}): `, email);

        // Add a log entry
        await addUserLogEntry(userID, 'register');

        // Send the registration email
        // const loginURL = `${process.env.NEXT_PUBLIC_BASE_URL}/login`;
        // const emailTemplate = UserRegistrationEmailTemplate(email, loginURL);
        // const mailResult = await sendMail(emailTemplate);
        // await addUserLogEntry(userID, mailResult.success ? 'message' : 'message-error', mailResult.message);
    }

    await startSession(userID, loginUser.type);


    console.info('User logged in by email: ', email);
    return {
        status: 'success',
        message: 'Login successful. Redirecting...',
        redirectURL: (loginUser.type === 'admin')
            ? process.env.USER_LOGIN_REDIRECT || '/'
            : process.env.ADMIN_LOGIN_REDIRECT || '/'
    };
}
