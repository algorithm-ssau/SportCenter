import express from 'express';
import mongoose from 'mongoose';  
import {registrationValidator} from './validations/auth.js'  ;
import {validationResult} from 'express-validator';

import UserModel from './models/User.js';

mongoose.connect('mongodb+srv://admin:wwwww@cluster0.rffoa2v.mongodb.net/blog',)//?
.then(()=> console.log('Conection with DB'))
.catch((err)=> console.log('DB error', err));

const app = express();//создание приложения

app.use(express.json());

app.get('/',(req,res)=> {
    res.send('111Hello World12312');
});

app.post('/registration', registrationValidator,async(req,res)=>{
    try{
    const errors = validationResult(req);
    if (!errors.isEmpty()){
        return res.status(400).json(errors.array());
        }
 
    const doc = new UserModel({
        email: req.body.email,
        fullName: req.body.fullName,
        phoneNumber: req.body.phoneNumber,
    });

    const user = await doc.save();

    res.json(user);
}
catch(err){
    console.log(err);
    res.status(500).json({
        message: "Не удалось зарегистрироваться",
    });
}
});

//указываем порт
app.listen(6314, (err)=>{
    if (err){
        return console.log(err);
    }

    console.log('Server has been started');
})
