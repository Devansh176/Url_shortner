import express from "express";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();            //Can fetch values from .env file

const port = process.env.PORT || 5001;
const app = express();

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.listen(port, () => {
    console.log(`Successfully server started on port : ${port}`);
}) 
