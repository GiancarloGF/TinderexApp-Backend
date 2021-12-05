import express from 'express';
import mongoose from 'mongoose';
import Cards from './models/cardSchema.js';
import dotenv from 'dotenv';
import Cors from 'cors';
dotenv.config();
//App config
const app = express();
const port = process.env.PORT || 8001;
//Middlewares
app.use(express.json());
app.use(Cors());
//DB config
const MONGODB_URI = process.env.MONGODB_URI;
mongoose.connect(MONGODB_URI)
//API Endpoints
app.get('/', (req, res) => {
    res.status(200).send('Hello World');
})

app.post('/api/cards', (req, res) => {
    const db_card= req.body;
    Cards.create(db_card, (err, data) => {
        if(err) res.status(500).send(err);
        else res.status(201).send(data);
    })
});

app.get('/api/cards', (req, res) => {
    Cards.find({}, (err, data) => {
        if(err) res.status(500).send(err);
        else res.status(200).send(data);
    })
});
//Listener
app.listen(port, () => {console.log(`Server is running on port ${port}`)});