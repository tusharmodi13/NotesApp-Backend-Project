const mongoose = require ("mongoose");

async function connectDB() {
    
    await mongoose.connect("mongodb+srv://yt:VlEenXDvrfR6bCvZ@yt-complete-backend.2imt70j.mongodb.net/halley")

    console.log("Connected to DB");

}

module.exports = connectDB