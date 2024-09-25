import {Request, Response} from 'express';
import {hashSync, compareSync} from 'bcrypt';
import UserModel from '../models/UserModel';


export const handleCreateUser = async (req: Request, res: Response) => {
    const {name, email, password} = req.body;
    if (name != null && email != null && password != null) {   
        console.log(name, email, password);
        const saltRounds = 10;
        
        //hash password
        const hashedpass = hashSync(password, saltRounds);
        
        //save
        const newuser = new UserModel({
            name: name,
            email: email,
            password: hashedpass
        });

        await newuser.save().then(()=> {
            //user created
            console.log("user created")
        }).catch(e => {
            console.error(e);
            //duplicate error/ email already exist 11000
            if(e.code == 11000) {
                res.status(400).json({error: "email already exist"})
            }
        } )

        res.end();
    }
    else{
        res.status(400).json({error : "field are empty"})
    }

}

export const handleUserVerification = async (req: Request, res: Response) => {
    const {email, password} = req.body;
    if (email != null && password != null) {   
        console.log( email, password);
        
        
       
        //find user
        const getuser = await UserModel.findOne({email: email}, {name :1, email: 1, password: 1})

        if (getuser == null) {
            res.status(404).json({error: "user not found"});
            return;
        }

        //verify password
        if (compareSync(password, getuser.password!))
        {
           //valid user
           res.status(200).json({message: "succefull"})
        }
        else{
            console.log("not valid");
            res.status(403).json({error: "password is incorrect"})
            
        }
        res.end();
    }
    else{
        res.status(400).json({error : "field are empty"})
    }
}