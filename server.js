const express = require("express")
const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost/wind").then(() => {console.log("db connect")}).catch((error) => {throw error})  //ใส่เพื่อให้มันรันได้ผ่าน port 
const app = express()

app.listen(4000,() => {
    console.log("start server http://localhost:4000")  //กำหนด port4000
})