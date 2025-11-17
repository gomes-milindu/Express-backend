import express from "express"
import mongoose from "mongoose"
import User from "./models/userModel.js"
import userRoute from "./routers/userRoute.js"
import productRouter from "./routers/productRouter.js"

const connectionString = "mongodb+srv://backend-clone:1234@cluster0.arkyzdz.mongodb.net/?appName=Cluster0"


const app = express()


app.use(express.json())
app.listen(5000,success)

app.use(
    (req,res,next)=>{
        let token = req.header("Authorization")
        if(token!=null){
            token = token.replace("Bearer ","") 
            console.log(token)
        }
    }
)

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



app.use("/route1",userRoute)
app.use("/route2",productRouter)

