const express = require('express');
const { connection } = require('./config/db');
const { authenticate } = require('./middlewares/authenticator');
const { notesroute } = require('./routes/notes');
const { route } = require('./routes/user');
const cors = require('cors')
authenticate

require('dotenv').config()


// {
//     "name":"diya",
//     "password": "4321",
//     "email": "gita@gmail.com",
//     "age":24
   
// }
const app = express();
app.use(express.json())

// 
app.use(cors())

app.use("/user", route)
app.use(authenticate)
app.use("/notes", notesroute)


app.get("/", (req, res) => {
    res.send("welcome to home page....")
})



app.listen(process.env.port || 8000, async () => {
    try {
        await connection
        console.log("connected to database");
    } catch (error) {
        console.log(error);
        console.log("can not connect to db");
    }
    console.log(`server running at ${process.env.port}`);
})