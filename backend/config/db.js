import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config(); 

const dbConnection = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_DB,{
            useNewUrlParser : true,
        });
        console.log(` Mongo DataBase Connencted to: ${conn.connection.host} `)
    }catch (error) {
        console.log(`Error connection db: ${error.messsage}`)
        process.exit(1);
    }
        }
export default dbConnection;

