const bcrypt = require('bcryptjs');

bcrypt.hash("pepe", 6).then(console.log);