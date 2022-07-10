const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.ATLAS_URI, ()=>console.log("DataBaase connected"))

const customerRouter = require('./customers.route');

app.use('/customers',customerRouter);


app.listen(port,()=>{
    console.log('Server is running on port: ' + port)
})