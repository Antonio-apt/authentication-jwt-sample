'use strict';

const {
    User
} = require('../models');

const obj = {
    register: async data => {
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
        return Promise.reject("Invalid Data");
    },

    profile: async data => {
        //awaiting modification
        console.log(data);
    }
}

module.exports = obj;