import mongoose  from "mongoose";
import dotenv from 'dotenv';
import dbConnection from './config/db.js'
import users from "./data/users.js";
import products from "./data/products.js";
import User from "./models/userModel.js";
import Product from "./models/productModel.js";
// import Order from "./models/orderModel.js";

dotenv.config()
dbConnection()

const importData = async () => {

    console.log('importing data...')

    try {
        await User.deleteMany();
        await Product.deleteMany();
        // await Order.deleteMany();

        const usersCreated = await User.insertMany(users);
        console.log('User insterted')

        const admUser = usersCreated[0]._id;

        const sampleProducts = products.map(p =>{
            return {...p, user : admUser}
        })

        await Product.insertMany(sampleProducts);
        console.log('Data Imported')
        process.exit()
    } catch (error) {
        console.log(`Errore Message from seeder : ${error.message}`)
        process.exit(1);        
    }
}
const destroyData = async() =>{
        console.log('calling destroy ...')
        try {
        await User.deleteMany();
        await Product.deleteMany();
        // await Order.deleteMany();
        console.log('data destroyed')
        process.exit()
        } catch (error) {
            console.log(`Errore Message from seeder : ${error.message}`)
            process.exit(1);
        }
    }
    if(process.argv[2] === '-d'){
        destroyData()
    }else{
        importData();
    }