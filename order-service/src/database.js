const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.POSTGRES_URI, {
    dialect: 'postgres',
    logging: false,
});

const connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log('PostgreSQL connected successfully');
    } catch (error) {
        console.error('PostgreSQL connection failed:', error.message);
        process.exit(1);
    }
};

module.exports = { sequelize, connectDB };