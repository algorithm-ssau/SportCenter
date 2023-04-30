import express from 'express';
import mongoose from 'mongoose';    

mongoose.connect('mongodb+srv://admin:<1234qwer>@cluster0.il5zpnc.mongodb.net/test')
.then(()=> console.log('Conection with DB'))
.catch((err)=> console.log('DB error', err));

const app = express();//создание приложения

app.use(express.json());

app.get('/',(req,res)=> {
    res.send('111Hello World12312');
});

app.post('/registration',(req,res)=>{
    console.log(req.body);

    res.json({
        succes: true,
    });
});

//указываем порт
app.listen(6314, (err)=>{
    if (err){
        return console.log(err);
    }

    console.log('Server has been started');
})
