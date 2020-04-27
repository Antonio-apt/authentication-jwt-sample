module.exports = {
    dialect: 'sqlite',
    storage: 'database.db',
    define: {
        //CreatedAt - UpdatedAt
        timestamps: false,
        underscored: true,
    }
};