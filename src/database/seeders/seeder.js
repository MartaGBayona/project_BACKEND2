import {dbConnection} from "../db.js"
import mongoose from "mongoose"
import seedPosts from "./post.seeders.js"
import seedUsers from "./user.seeder.js"
import "dotenv/config"


const seed = async () => {
    try {
        await dbConnection();
        console.log("database connected")
        await seedUsers()
        await seedPosts()
    } catch (error) {
        console.log("ffffff")
        console.error(error.message)
    } finally {
        await mongoose.connection.close();
        console.log("database conection closed");
    }
}

seed()