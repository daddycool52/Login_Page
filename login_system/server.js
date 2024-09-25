const express=require('express');
const app=express();

const port=process.env.port||3000;

app.set('view engine','ejs');

app.get('/',(req,res)=>{
    res.render('base',{title:"Login System"})

    app.get('/', (req, res) => {
        res.render('home.js', { title: 'Anasayfa' });
    });
    


})


app.listen(port,()=>{console.log("Listening to the server on http://localhost:3000")});
