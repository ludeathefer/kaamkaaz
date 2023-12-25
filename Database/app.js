require('dotenv').config()
const express = require('express')
const app= express();

//middlewares
const connectDB=require('./db/connect')
const {errorHandler} = require('./middleware/handleErrors')
const authRouter= require("./routes/auth");
const requestRouter= require("./routes/request");
const userRouter= require("./routes/user");
const providerRouter= require("./routes/provider");
const authenticate = require('./middleware/authentication');
const verifyAdmin = require("./middleware/verifyAdmin");
const adminRouter = require('./routes/admin');


app.use(express.json({limit: '25mb'}));
app.use('/',  authRouter)         //login or register, doesn't require authentication
app.use('/', verifyAdmin, adminRouter)
app.use('/', authenticate, requestRouter, userRouter, providerRouter)


app.use(errorHandler);

const start=async()=>{
    try {
        const port = 5000
        await connectDB(process.env.MONGO_URI)
        app.listen(port, ()=>{
            console.log("server listening on port "+port)
            
        })
    }
    catch (error) {
        errorHandler(error);
    }
}
    
start()