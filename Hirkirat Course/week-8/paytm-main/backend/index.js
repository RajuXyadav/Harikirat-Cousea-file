
const express = require("express");
const mainRoute = require('./routes/index')
const cors = require('cores');


const app = express();
app.use(cors());
app.use(express.json())
app.use('/api/v1',mainRoute)





const myPort = 3000;

app.listen(myPort,()=>{
    console.log(`Server is listening at port ${myPort}`)
})


