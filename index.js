import express from "express";
import bodyParser from "body-parser";
import userRoutes from './routes/userRoutes.js'



const app = express();
const port = 3002;
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded())



app.use('/', userRoutes);



app.listen(port, ()=>{
    console.log(`server is runnin on port ${port}`)
})