const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');
const router = require('./routes/routes');
app.use(cors());
app.use(express.json());
app.use('/', router)



let PORT = process.env.PORT || 5000;
//let URL = "mongodb+srv://Jagadeesh:Sp04BhBXuan8Q2m3@cluster0.46elio1.mongodb.net/?retryWrites=true&w=majority";

let URL = "mongodb+srv://janak1:Bittu123@cluster0.pb69dx4.mongodb.net/?retryWrites=true&w=majority"

let uri = "mongodb+srv://janak1:Bittu123@mern.bb6y8yb.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(URL).then(() => {
    try{
        app.listen(PORT, () => {
            console.log(`Connected to port ${PORT}`);
        })
    }
    catch(err){
        console.log(err);
    }
})

app.get('/', (req, res) => {
    res.send("Welcome to the Demo")

})

