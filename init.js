import mongoose from 'mongoose';
import { Chat } from './models/chat.js';

main()
.then(()=> console.log("Connection Successfull"))
.catch((err)=> console.log(err));

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}


let allChats = [
    {
    from: "Amit",
    to: "Suresh",
    message: "Congratulations on your promotion!",
    created_at: new Date(),
},
{
    from: "Priya",
    to: "Neha",
    message: "All the best for your exams!",
    created_at: new Date(),
},
{
    from: "Rohit",
    to: "Ankit",
    message: "Let's catch up this weekend.",
    created_at: new Date(),
},
{
    from: "Sneha",
    to: "Pooja",
    message: "Happy Anniversary!",
    created_at: new Date(),
},
{
    from: "Vikas",
    to: "Karan",
    message: "Meeting is scheduled at 5 PM.",
    created_at: new Date(),
},
{
    from: "Meena",
    to: "Ritu",
    message: "Thank you for your help!",
    created_at: new Date(),
},
{
    from: "Arjun",
    to: "Dev",
    message: "Good luck for your interview!",
    created_at: new Date(),
},
{
    from: "Kavita",
    to: "Sunita",
    message: "Hope you are doing well!",
    created_at: new Date(),
}
];

Chat.insertMany(allChats);