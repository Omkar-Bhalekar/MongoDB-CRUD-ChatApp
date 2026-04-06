import express from 'express';
import path from 'path';
import mongoose from 'mongoose';
import ejs from 'ejs';
import {fileURLToPath} from 'url';
import { Chat } from './models/chat.js';
import methodOverride from 'method-override';
import dotenv from 'dotenv';
dotenv.config();

const port = process.env.PORT;
const app = express();

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use(methodOverride('_method'));

// ejs setup 

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.set("view engine", "ejs");
app.set("views",path.join(__dirname,"views"));

app.listen(port,()=>{
    console.log("Listening to Port "+ port);
})

// Mongoose setup

main()
.then(()=> console.log("Connection Successfull"))
.catch((err)=> console.log(err));

async function main(){
    await mongoose.connect(process.env.MONGO_URL);
}


app.get("/chats", async (req,res)=>{
    try {
        let data = await Chat.find({});
        res.render("chats",{data});
    } catch (error) {
        console.log(error); 
    }
});



app.get("/chats/new",(req,res)=>{
    res.render("newChat")
})

app.post("/chats/new", async (req,res)=>{
    let {from : senderName, to : receiverName , message : body} = req.body;
    
    try {
       await Chat.create({
          from: senderName,
          to: receiverName,
          message : body,
          created_at: new Date(),
       })
       res.redirect("/chats");
    } catch (error) {
        console.log(error);  
    }  
})



app.get("/chats/:id/edit", async (req,res)=>{
    let {id} = req.params;
    let chat = await Chat.findById(id);
    res.render("edit",{chat})
})

app.put("/chats/:id", async (req,res)=>{
    let {id} = req.params;
    let { message } = req.body;
    try {
        let data = await Chat.findByIdAndUpdate(id,{$set:{message : message,updated_at: new Date()}},{returnDocument: 'after'})
        res.redirect("/chats");
    } catch (error) {
        console.log(error);
        res.send("Failed")
    }     
})



app.delete("/chats/:id/delete",async (req,res)=>{
    let { id } = req.params;
    try {
        let chat = await Chat.findByIdAndDelete(id);
        console.log(chat);
        res.redirect("/chats");
    } catch (error) {
        res.send(error);
    }
       
})








