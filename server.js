import express from 'express';
import Mongoose from 'mongoose';

//App config
const app = express();
const port = process.env.PORT || 8001;
//Middlewares

//DB config

//API Endpoints
app.get('/', (req, res) => {
    res.status(200).send('Hello World');
})
//Listener
app.listen(port, () => {console.log(`Server is running on port ${port}`)});