import {connect} from 'mongoose'
import { dbName, mongodb_con } from '../config/config'

export async function start() {
    await connect(mongodb_con || '', {
        dbName: dbName
    });
}