# MongoDB CRUD Chat App

A learning project to practice MongoDB CRUD operations using **Express.js** and **Mongoose**, with a simple chat-based data model.

## Tech Stack

- Node.js
- Express.js
- MongoDB + Mongoose
- EJS (Embedded JavaScript Templates)
- Tailwind CSS

## Features

- View all chats
- Create a new chat
- Edit a message
- Delete a chat
- Toggle message visibility on the main page

## Project Structure

mongodb-crud-chat/
├── models/
│   └── chat.js
├── views/
│   ├── chats.ejs
│   ├── edit.ejs
│   └── newChat.ejs
├── .env
├── .env.example
├── .gitignore
├── index.js
├── init.js
└── package.json

## How to Run Locally

1. Make sure MongoDB is running on your machine
2. Clone this repo
```bash
   git clone https://github.com/Omkar-Bhalekar/MongoDB-CRUD-ChatApp.git
```
3. Navigate into the project
```bash
   cd mongodb-crud-chat
```
4. Install dependencies
```bash
   npm install
```
5. Copy `.env.example` to `.env` and fill in your values
```bash
   cp .env.example .env
```
6. Run the app
```bash
   node index.js
```
7. Visit `http://localhost:8080/chats`

## What I Learned

- Connecting MongoDB with Mongoose
- Performing CRUD operations (Create, Read, Update, Delete)
- Using EJS for server-side rendering
- Method override for PUT and DELETE in HTML forms
- Environment variables with dotenv