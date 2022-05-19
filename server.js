require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const fileUpload = require('express-fileupload')
const cookieParser = require('cookie-parser')
const path = require('path')

const app = express()
app.use(express.json())
app.use(cookieParser())
app.use(cors())
app.use(fileUpload({
    useTempFiles: true
}))

//router
app.use('/user', require('./routers/userRouter'))
app.use('/api',require('./routers/categoryRouter'))
app.use('/api', require('./routers/upload'))
app.use('/api', require('./routers/productRouter'))




//mogoose db connecting 
const URI = process.env.mongoDB_url

mongoose.connect(URI,{
    useNewUrlParser: true, 
    useUnifiedTopology: true 
}, err => { 
    if(err) throw err;
    console.log('connect to mogoDB')
})
const PORT = process.env.port || 5000



app.listen(PORT, () =>{
    console.log('Server is running on port', PORT)
})