import express from "express"
import User from "../models/userModel.js"
import jwt from "jsonwebtoken"

export async function createUser(req,res){
    
        console.log("create user is working")
        const newUser = new User(
            {
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                password: req.body.password,
                role: req.body.role

            }
        )

        const existingUser = await User.findOne({email: req.body.email})

        if(existingUser){
            console.log("Email is existing")
        }else{
            newUser.save().then(
                ()=>{
                    console.log("user saved")
                }
            ).catch(
                ()=>{
                 console.log("User not saved")
                }
            )
        }

        

        
    
}

export function loginUser(req,res){
    User.findOne({
        email: req.body.email
    }).then(
        (user)=>{
            if(user==null){
                console.log("User not found")
            }else{
                if(user.password===req.body.password){
                    
                    const token = jwt.sign(
                        {
                            firstName: user.firstName,
                            lastName: user.lastName,
                            email: user.email,
                            role: user.role
                    },'JWT-SECRET-KEY',
                    )

                    res.json({
                        "message": "Login Successful",
                        "token": token,
                        "user": user
                        
                    })
                }
            }
            
        }
    ).catch()
}


export function isAdmin(req,res){
    if(req.User.role==null){
        return false
    }

    if(req.User.role!=="admin"){
        return false
    }

    return true
}