import express from "express";          // Import the express package
import dotenv from "dotenv";        // Import the dotenv package

import authRoutes from "./routes/auth.routes.js";  // Import the authRoutes
import { connect } from "mongoose";

import connectToMongoDB from "./db/connectToMongoDB.js";


const app = express();  // Create an express app
const PORT = process.env.PORT || 5000; // Define the port

dotenv.config();        // Configure the dotenv package

// app.get("/",(req,res)=>{
//     res.send("Hello Worlds");
// });
app.use(express.json()); // Use the express.json() middleware

app.use("/api/auth",authRoutes); // Use the authRoutes

app.listen(PORT, () => {
    connectToMongoDB();
    console.log(`Server is running on port ${PORT}`);
});