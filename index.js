import express from 'express';

const app = express();//создание приложения

app.get('/',(req,res)=> {
    res.send('111Hello World12312');
});
//указываем порт
app.listen(6314, (err)=>{
    if (err){
        return console.log(err);
    }

    console.log('Server has been started');
})