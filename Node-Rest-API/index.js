const express = require("express");
const app = express();
//const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");

const userRoute = require("./routes/users");

dotenv.config();

const PORT = process.env.PORT || 8000;

// mongoose.connect(process.env.MONGO_URL,{useNewUrlParser: true, 
//     useUnifiedTopology:true, useCreateIndex:true, useFindAndModify: false}, ()=>{
//         console.log("Connected to Mongodb")
// });

app.use(helmet());
app.use(express.json());
app.use(morgan('common'));

app.use("/users", userRoute);

app.listen(PORT, ()=>{
    console.log("application is running on port "+ PORT);
})