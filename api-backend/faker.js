const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const {User} = require('./models/user');
const path = require('path');
const fs = require('fs/promises');
const {UsCitiesStatesZipcode} = require('./models/us_cities_states_zipcode');


// Create connection with mongoose DB
mongoose.connect('mongodb://localhost/appointment')
.then(() => console.log("Database connected"))
.catch(error => console.log("Database connected", error));
const seeDB = async() => {
    const salt = await bcrypt.genSalt(10);
    const password = await bcrypt.hash("12345", salt);
    const seedUsers = [
        {
            name: "Ankit",
            mobile: "1234567890",
            email: "ankitthaparbt@gmail.com",
            password: password,
        }
    ];

    await User.deleteMany({});
    await User.insertMany(seedUsers)

    const filePathRoles = path.join(process.cwd(), 'us_cities_states_zipcode.json');
    const jsonDataRoles = await fs.readFile(filePathRoles);
    const seedStates = (jsonDataRoles);
    await UsCitiesStatesZipcode.insertMany(seedStates)
};

seeDB().then(()=> {
    mongoose.connection.close();
})