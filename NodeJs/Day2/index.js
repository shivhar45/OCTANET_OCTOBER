const express = require("express");
const app = express()

app.use(express.json())


app.get("/hello" ,(req,res)=>{
    res.send("Hello from Node backend")
})

app.get("/profile", (req,res)=>{
    res.json({
        "name":"your name",
        "learning": "Node.js Day 2"
    })
})
// const date = new Date();
    // res.json({
    //     date
    // })

app.get("/time",(req,res)=>{
    const date = new Date();
    res.json({
        date
    })
})
app.listen(3000, ()=>{
    console.log("server started on http://loacalhost:3000");
});