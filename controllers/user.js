const User = require('../models/user');
const bcrypt = require('bcryptjs');

class UserController {

    constructor() {}

    async indexAll() {
        return User.find().limit(10);
    }

    async store(user) {
        const password = user.password
        const encrypted = await bcrypt.hash(password, 6);
        user.password = encrypted;
        return User.create(car);
    }

    async update(id, car) {
        return User.findByIdAndUpdate(id, user);
    }

    async destroy(id) {
        return User.findByIdAndRemove(id);
    }

}


let userController = new UserController();
module.exports = userController;