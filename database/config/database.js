module.exports = {
    dialect: process.env.dialect,
    storage: process.env.storage,
    define:{
        //CreatedAt - UpdatedAt
        timestamps: true,
        underscored: false,
    }
}