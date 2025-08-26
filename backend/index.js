import express, { json } from "express"
import { connectDB } from "./config/db.js"
import cors from "cors"

const app = express()
app.use(cors())
app.use(json())

import userRoutes from './routes/user.route.js'

import blogRoutes from './routes/blog.routes.js'

app.use("/api/users", userRoutes);
app.use("/api/blogs", blogRoutes);

const PORT = process.env.PORT || 8000
connectDB()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`⚙️ Server is running at port : ${PORT}`);

        })
    })

    .catch((err) => {
        console.log("MONGO db connection failed !!! ", err);

    })