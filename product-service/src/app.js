const express = require('express');
const connectDB = require('./database');
const productRoutes = require('./routes/productRoutes');

require('dotenv').config();

const app = express();
app.use(express.json());

// Routes
app.use('/api', productRoutes);

// Start server
const PORT = process.env.PORT || 5000;
connectDB().then(() => {
    app.listen(PORT, () => console.log(`Product Service running on port ${PORT}`));
});