import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import connection from "./Database/config.js";
import Router from "./Routers/router.js";

const app = express()
dotenv.config()

app.use(express.json())
app.use(cors())


// function call for db connection
connection()

// Get home page call
app.use('/',(req,res)=>{
    res.status(200).send(`<div style="background-color:rgb(94, 159, 135);text-align: center;border-radius: 25px;"><h1>
    Server Connected Successfully🌐
    </h1>
    </div>
    
    <h2>Api is working fine. Please check on postman🖥</h2>
    <h3>Please explore api documentation to hit the above APIs </h3>
 🧾<a href="https://documenter.getpostman.com/view/14958136/2sA2xiWXWw">"API Documentaion Link"</a>`)
})
// Router call 
app.use('/api',Router)

const port = process.env.PORT
app.listen(port, ()=>{
    console.log("Server connected successfully",port)
})