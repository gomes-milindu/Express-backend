import express from "express"
import mongoose from "mongoose"

const connectionString = "mongodb+srv://backend-clone:1234@cluster0.arkyzdz.mongodb.net/?appName=Cluster0"

const app = express()
app.use(5000,success)

function success(){
    console.log("Succes is working")
}

mongoose.connect(connectionString).then(
    ()=>{
        console.log("Database Connected")
    }
).catch(
    ()=>{
        console.log("DataBase Not Connected")
    }
)