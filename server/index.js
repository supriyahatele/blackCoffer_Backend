require('dotenv').config()
const express = require('express');
const cors =require('cors');
const { dbToConnection } = require('./config/dbConnection');
const { dataRouter } = require('./routes/routes');

const app = express();
app.use(express.json());
app.use(cors())

app.use("/api/v1",dataRouter)

app.listen(process.env.PORT,()=>{
  dbToConnection()
    console.log('server is running!')
})