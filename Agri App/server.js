const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

// Middleware
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost/dmaFarmers', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Import Routes
const farmersRoute = require('./routes/farmers');
const productsRoute = require('./routes/products');

// Route Middlewares
app.use('/api/farmers', farmersRoute);
app.use('/api/products', productsRoute);

// Start Server
app.listen(3000, () => console.log('Server running on port 3000'));
