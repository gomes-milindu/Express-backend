import { isAdmin } from "./userControllers.js";

export default function createProduct(req,res){
    if(!isAdmin(req)){
        console.log("Access Denied. You are not admin")
    }else{
        console.log("Product Created Successfully")
    }
}