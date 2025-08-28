/** Models **/
import {Column, DataType, Model, PrimaryKey, Sequelize, Table} from 'sequelize-typescript';
import pg from 'pg';
import 'reflect-metadata';

/** Model Definitions **/

@Table({
    tableName: 'site_vars'
})
export class SiteVar extends Model {
    @PrimaryKey
    @Column(DataType.STRING)
    key!: string;

    @Column(DataType.TEXT)
    value!: string;
}

/** End Models **/

const sequelize = new Sequelize(`${process.env.DATABASE_URL}`, {
    dialect: 'postgres',
    dialectModule: pg,
    dialectOptions: {
        ssl: process.env.NODE_ENV === 'production' ? {
            require: true,
            rejectUnauthorized: false
        } : false
    },
    logging: false,
    models: [SiteVar],
});

await sequelize.sync();

// const jane = await SiteVar.create({
//     key: 'janedoe',
//     value: new Date(1980, 6, 20) + '',
// });

// console.log(jane.toJSON());

