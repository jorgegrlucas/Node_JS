const mongoose = require("mongoose");
const connectToDatabase = async () => {
        await mongoose.connect(
            `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster0.ne6vufp.mongodb.net/?retryWrites=true&w=majority`    
    );
    console.log("Conectou")
};

module.exports = connectToDatabase;