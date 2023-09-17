import express  from "express";
import { config } from "dotenv";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import cors from "cors"
import ErrorMiddelware from "./middelware/error.js"
import userRoute from "./routes/userRoute.js"

const app = express();

// Config
config({
    path:"./config/config.env"
})

app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.json())
app.use(
    cors({
      origin: process.env.FRONTEND_URL,
      credentials: true,
      methods:["GET", "POST", "PUT", "DELETE"]
    })
);


app.get("/", (req, res)=>{
    res.send("Welcome")
})

// Using Routes
app.use("/api/v1", userRoute)

export default app

// Using Custom Error Middelware
app.use(ErrorMiddelware)