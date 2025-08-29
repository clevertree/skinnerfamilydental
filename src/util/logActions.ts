'use server';

import {UserLog, UserLogType} from "@util/pgclient";


export async function fetchUserLogs(userID: number) {
    return UserLog.findAll({
        where: {
            user_id: userID
        }
    })
}

export async function addUserLogEntry(user_id: number | null, type: UserLogType, message: string = '') {
    return await UserLog.create({
        user_id,
        type,
        message,
        timestamp: new Date()
    });
}
