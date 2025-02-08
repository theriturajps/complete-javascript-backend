import express from "express"
import connectDB from "./db/connect";


connectDB(process.env.MONGODB_URL)


