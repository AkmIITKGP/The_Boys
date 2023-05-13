const express = require("express")
const app = express();
const fs = require("fs");
const path = require("path");
const port = 80;

app.use('/static',express.static('static'))
app.use(express.urlencoded())

app.set('view engine','pug')
app.set('views',path.join(__dirname,'views'))

// Navbar Section
app.get('/',(req,res)=>{
    const params = {}
    res.status(200).render('Home.pug',params);
})
app.get('/Boys',(req,res)=>{
    const params = {}
    res.status(200).render('Boys.pug',params);
})
app.get('/Marvels',(req,res)=>{
    const params = {}
    res.status(200).render('Marvels.pug',params);
})
app.get('/CouncilMembers',(req,res)=>{
    const params = {}
    res.status(200).render('CouncilMembers.pug',params);
})

// Server Section 
app.listen(port,()=>{
    console.log(`The application started successfully on port ${port}`)
})