import {Schema, model} from 'mongoose'

const schema =  new Schema(
    {
        name : {type: String, require: true},
        email : {type: String, require: true, unique: true},
        password : {type: String,  require: true, select: false},
        bio: {type: String},
        profilePitcure: {type : String},
    }, {
        timestamps: true
    }
)

const UserModel =  model('users', schema);
export default UserModel;