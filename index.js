const express = require("express")
const app = express();
const cors = require("cors");
app.use(cors());
require("dotenv").config();
app.use(express.json());
const router = express.Router()
const signupRouter = require("./routes/signup")
const loginRouter = require("./routes/login")
const mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_URI)




app.use(signupRouter)
app.use(loginRouter)




app.listen(process.env.PORT, () => {
    console.log("server has starded")
})