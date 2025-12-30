const express = require("express")


require("dotenv").config()
const connectDB = require("./config/db")
const authRoutes = require("./routes/authRoutes")
const errorHandler = require("./middleware/errorHandler");

const logger = require("./middleware/logger")

const app = express();

app.use(express.json());
connectDB();

app.use(logger);
app.use("/api/auth", authRoutes);
app.use(errorHandler);


app.listen(process.env.PORT, ()=>
    console.log(`Server running on port ${process.env.PORT}`)
);