const bodyParser = require("body-parser");
const cors = require("cors");
const express = require("express");


const ProductRouter = require("./routers/ProductRouter");
const UserRouter=require("./routers/UserRouter")
const MessageRouter=require("./routers/MessageRouter")

const app = express();

const fileUpload = require('express-fileupload');

app.use(bodyParser.json());
app.use(cors());
app.use(ProductRouter);
app.use(UserRouter);
app.use(MessageRouter)

app.use(fileUpload());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static('public'));
app.post('/upload', (req, res) => {
    // Log the files to the console
    console.log(req.files);
    const {caption} =req.body;
    const { image } = req.files;
    if (!image) return res.sendStatus(400);
    // Move the uploaded image to our public folder
    image.mv(__dirname + '/public/' + image.name);
    // All good
    console.log("caption:",caption);
    console.log("image_url:",image.name);
    console.log("__dirname",__dirname)
    res.sendStatus(200);
});

app.listen(8081,()=>{
    console.log("Server started!!!")
});

// const express = require('express');
// const fileUpload = require('express-fileupload');
// const app = express();
// const bodyParser=require("body-parser");
// const cors=require("cors");
// const port = 10000;
// //install express-fileupload middleware
// //npm i --save express-fileupload

// // Use the express-fileupload middleware
// app.use(fileUpload());

// //cors
// app.use(cors());

// // parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: false }))

// // parse application/json
// app.use(bodyParser.json())

// //declare folder where images,css are kept
// app.use(express.static('public'));

// app.post('/upload', (req, res) => {
//     // Log the files to the console
//     console.log(req.files);
//     const {caption} =req.body;
//     const { image } = req.files;
//     if (!image) return res.sendStatus(400);
//     // Move the uploaded image to our public folder
//     image.mv(__dirname + '/public/' + image.name);
//     // All good
//     console.log("caption:",caption);
//     console.log("image_url:",image.name);
//     console.log("__dirname",__dirname)
//     res.sendStatus(200);
// });

// app.listen(port, () => {
//     console.log(`Example app listening on port ${port}`);
// });