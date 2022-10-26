const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const routes = require('./routes/apiaries.router');
dotenv.config();
const mongoString = process.env.DB_URL;
mongoose.connect('mongodb://' + mongoString);

class Database { // Singleton
    connection = mongoose.connection;

    constructor() {
        try {
            this.connection
            .on('open', console.info.bind(console, 'Database connection: open'))
            .on('close', console.info.bind(console, 'Database connection: close'))
            .on('disconnected', console.info.bind(console, 'Database connection: disconnecting'))
            .on('disconnected', console.info.bind(console, 'Database connection: disconnected'))
            .on('reconnected', console.info.bind(console, 'Database connection: reconnected'))
            .on('fullsetup', console.info.bind(console, 'Database connection: fullsetup'))
            .on('all', console.info.bind(console, 'Database connection: all'))
            .on('error', console.error.bind(console, 'MongoDB connection: error:'));
        } catch (error) {
            console.error(error);
        }
    }
}

const db = new Database();

const app = express();

app.use(express.json());
app.use('/apiaries', routes);

app.listen(3000, () => {
    console.log('Server started at port 3000');
});

// module.exports = new Database();