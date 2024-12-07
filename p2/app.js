require("dotenv").config();
const express = require("express");
const userRouter = require("./routes/user");
const {connectMongoDb} = require("./connection");
const signUpRouter = require("./routes/signup");
const loginRouter = require("./routes/login");
const { verifyToken } = require("./middlewares/auth");

const app = express();
const PORT = process.env.PORT || 8000;

// Connection
connectMongoDb("mongodb+srv://btUser:btUser@bt01.ztzyq.mongodb.net/?retryWrites=true&w=majority&appName=BT01").then(() => console.log("MongoDB connected"));

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Router
app.use("/api/users", verifyToken, userRouter);
app.use("/", signUpRouter);
app.use("/", loginRouter);



app.listen(PORT, () => console.log(`Server started on ${PORT}`));