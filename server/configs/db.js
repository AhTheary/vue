const mongoose = require('mongoose')

module.exports = async() => {
    try {
        await mongoose.connect('mongodb://52.91.219.193:27017/mgdb_tp12_2');
        console.log("MongoDB connected :(");
    } catch (error) {
        console.log("MongoDB err: ", error);
    }
}
