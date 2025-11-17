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
                    res.json({
                        "message": "Login Successful",
                    })

                    const token = jwt.sign(
                        {
                            
                            
                            email: user.email,
                            role: user.role
                        })
                }
            }
            
        }
    ).catch()
}