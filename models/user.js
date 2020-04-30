const bcrypt = require("bcrypt");

module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define(
        "User", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            name: {
                allowNull: false,
                type: Sequelize.STRING,
            },
            email: {
                allowNull: false,
                type: Sequelize.STRING,
                unique: true,
            },
            password: {
                allowNull: false,
                type: Sequelize.STRING,
            },
        }, {
            sequelize,
            hooks: {
                beforeCreate: async (user) => {
                    return bcrypt
                        .hash(user.password, 10)
                        .then((hash) => {
                            user.password = hash;
                        })
                        .catch((err) => {
                            throw new Error(err);
                        });
                },
            },
        }
    );

    User.prototype.isValidPassword = async (password) => {
        return bcrypt.compare(password, this.password);
    };

    return User;
};