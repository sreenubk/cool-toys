import express from 'express'
import dotenv from 'dotenv'
import dbConnection from './config/db.js'
import Product from './models/productModel.js'
import productRoute from './routes/productRoute.js'
// import { restart } from 'nodemon'
import {reqError,serverError} from './middleware/errorHandler.js'

dotenv.config();
const app = express();
const dbConn = dbConnection()

app.get("/", (req, res) =>{
    res.send("API IS RUNNING")
})

app.use("/api/products", productRoute);

app.use(reqError)

app.use(serverError);

const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`server running in ${process.env.NODE_ENV} mode on port : ${PORT} `))
