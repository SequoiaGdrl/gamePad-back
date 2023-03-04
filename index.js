const express = require("express")
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());
const router = express.Router()
const signupRouter = require("./routes/signup")
const loginRouter = require("./routes/login")
const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://Sequoia:pln21EpStbWzDdl1@cluster0.n61oq6y.mongodb.net/test")




app.use(signupRouter)
app.use(loginRouter)




app.listen(3000, () => {
    console.log("server has starded")
})