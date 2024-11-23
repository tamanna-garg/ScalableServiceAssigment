const express = require('express');
const { connectDB } = require('./database');
const orderRoutes = require('./routes/orderRoutes');

require('dotenv').config();

const app = express();
app.use(express.json());

// Routes
app.use('/api', orderRoutes);

// Start server
const PORT = process.env.PORT || 6000;
connectDB().then(() => {
    app.listen(PORT, () => console.log(`Order Service running on port ${PORT}`));
});