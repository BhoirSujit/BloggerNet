import {config} from 'dotenv'

config();

const port : string = process.env.PORT || '5000';
const mongodb_con : string | undefined = process.env.MONGODB_CON;
const dbName : string | undefined = process.env.DB_NAME;

export {port, mongodb_con, dbName};