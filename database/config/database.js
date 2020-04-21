module.exports = {
    dialect: process.env.dialect,
    storage: process.env.storage,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
}