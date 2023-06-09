import { Request, Response } from "express";
import { IUserSignUp } from "interfaces/userInterface";
import bcrypt from "bcrypt";
import Users from "../../models/user";

export default async (req:Request, res:Response) => {
    try {
      const { emailId, userName, phone, password } = req.body;
      const emailIdLowerCase=emailId.toLowerCase();
      
      const userExist:any = await Users.findOne({ emailId: emailId });
      // console.log(emailId);
  
      if (userExist) return res.status(403).send({error:true,message:"User Alredy Exist"})
      const saltRounds = 5;
      const hashPass=await bcrypt.hash(password, saltRounds);
      const newUserData: IUserSignUp = new Users({
        emailId: emailIdLowerCase,
        userName: userName,
        phone: phone,
        password: hashPass,
        imgUrl:""
      });
      
      const newUser = Users.create(newUserData);
      //   res.send(newUser);
  
      res.status(201).send({success:true,message:"New User Added"});
      
    } catch (err: any) {
      res.status(505).send({ Error: true, message: err?.message });
    }
  }