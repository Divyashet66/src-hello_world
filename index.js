const express=require('express')
const app=express()

app.use('/',(req,res)=>{
    res.send("Hello World!!!")
})

app.listen(5000,()=>{
    console.log('open "http://localhost:5000"')
})