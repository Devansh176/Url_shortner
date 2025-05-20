import express, { urlencoded } from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDb from "./config/dbConfig";
import shortUrl from "./routes/shortUrl";
dotenv.config();            //Can fetch values from .env file
connectDb();

const port = process.env.PORT || 5001;
const app = express();
app.use(express.json());
app.use(urlencoded({ extended: true}));
app.use(
    cors({
        origin: "http://localhost:3000",
        credentials: true,
    })
);

app.use("/api/", shortUrl);

app.listen(port, () => {
    console.log(`Successfully server started on port : ${port}`);
});
