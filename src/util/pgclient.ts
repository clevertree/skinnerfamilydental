/** Models **/
import {
    AutoIncrement,
    BelongsTo,
    Column,
    DataType,
    ForeignKey,
    Model,
    PrimaryKey,
    Sequelize,
    Table,
    Unique
} from 'sequelize-typescript';
import pg from 'pg';
import 'reflect-metadata';

/** Model Definitions **/

@Table({
    tableName: 'site_variable'
})
export class SiteVar extends Model {
    @PrimaryKey
    @Column(DataType.STRING)
    declare key: string;

    @Column(DataType.TEXT)
    declare value: string;
}

export type UserType = 'admin' | 'user';
export const userTypes = ['admin', 'user'];

@Table({
    tableName: 'user'
})
export class User extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column(DataType.INTEGER)
    declare id: number;

    @Unique
    @Column(DataType.STRING)
    declare email: string;


    @Column(DataType.ENUM(...userTypes, 'deleted'))
    declare type: UserType;
}

export type UserLogType = 'log-in' | 'log-in-error' | 'log-out' | 'register' | 'message' | 'message-error';
export const userLogTypeValues = ['log-in', 'log-in-error', 'log-out', 'register', 'message', 'message-error'];

@Table({
    tableName: 'user_log'
})
export class UserLog extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column(DataType.INTEGER)
    declare id: number;

    @ForeignKey(() => User)
    @Column(DataType.INTEGER)
    declare user_id: number;

    @BelongsTo(() => User)
    declare user: User;

    @Column(DataType.ENUM(...userLogTypeValues))
    declare type: UserLogType;

    @Column(DataType.TEXT)
    declare message: string;

    @Column(DataType.DATE)
    declare timestamp: Date;
}


export type User2FactorCodeType = 'email' | 'phone';
export const user2FactorCodeTypes = ['email', 'phone'];

@Table({
    tableName: 'user_2fa_codes',
    indexes: [
        {
            unique: true,
            fields: ['type', 'receiver', 'code'],
            name: 'uk_type_receiver_code'
        }
    ]
})
export class User2FactorCode extends Model {
    @Column({
        type: DataType.ENUM(...user2FactorCodeTypes),
        allowNull: false,
        validate: {
            isIn: [user2FactorCodeTypes]
        }
    })
    declare type: User2FactorCodeType;

    @Column({
        type: DataType.STRING(64),
        allowNull: false
    })
    declare receiver: string;

    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    declare code: number;

    @Column({
        type: DataType.DATE,
        allowNull: false
    })
    declare expiration: Date;

    @Column({
        type: DataType.DATE,
        allowNull: false,
        defaultValue: DataType.NOW
    })
    declare created_at: Date;
}


/** End Models **/


let sequelize: Sequelize | undefined;

export async function getSequelize() {
    if (sequelize) {
        return sequelize;
    }

    sequelize = new Sequelize(`${process.env.DATABASE_URL}`, {
        dialect: 'postgres',
        dialectModule: pg,
        dialectOptions: {
            ssl: process.env.NODE_ENV === 'production' ? {
                require: true,
                rejectUnauthorized: false
            } : false
        },
        logging: false,
        models: [SiteVar, User, UserLog, User2FactorCode],
    });

    await sequelize.sync();
}

// const jane = await SiteVar.create({
//     key: 'janedoe',
//     value: new Date(1980, 6, 20) + '',
// });

// console.log(jane.toJSON());


// await User.create({
//     email: 'ari.asulin@gmail.com',
//     value: 'admin'
// })
// await User.create({
//     email: 'skinnerdmd@comcast.net',
//     value: 'admin'
// })