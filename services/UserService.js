'use strict';

const {
    User
} = require('../models');

exports.register = async data => {
    console.log(data)
    if (data.name && data.email && data.password) {
        try {
            const createUser = await User.create({
                name: data.name,
                email: data.email,
                password: data.password,
            });

            return Promise.resolve(createUser.name);
        } catch (err) {
            return Promise.reject(err.message);
        }
    }
    throw new Error('Invalid data');
}