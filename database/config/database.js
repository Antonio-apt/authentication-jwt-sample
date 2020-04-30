module.exports = {
    dialect: "sqlite",
    storage: "database.db",
    define: {
        //CreatedAt - UpdatedAt
        timestamps: true,
        underscored: true,
    },
};