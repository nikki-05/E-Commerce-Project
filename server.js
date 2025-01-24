const express = require("express");
const mongoose = require("mongoose");
const app = express();
const server_config = require("./configs/server.configs");
const db_config = require("./configs/db.config");
const user_model = require("./models/user.model"); // Correct path
const bcrypt = require("bcrypt");
app.use(express.json()) //this is middleware that connect json to javascript object

// Database connection
mongoose.connect(db_config.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

db.on("error", () => {
    console.error("Error connecting to database");
});

db.once("open", () => {
    console.log("Connected to database successfully");
});

// Initialize admin user
// Initialize admin user
async function init() {
    try {
        let user = await user_model.findOne({ userId: "admin" });
        if (user) {
            console.log("Admin user already exists");
            return;
        }

        user = await user_model.create({
            name: "Nikita",
            userId: "admin1234",
            email: "nikitatewari1633@gmail.com",
            userType: "ADMIN", // Use uppercase to match the enum
            password: bcrypt.hashSync("Welcome1", 8),
        });

        console.log("Admin user created:", user);
    } catch (error) {
        console.error("Error initializing admin user:", error);
    }
}

init();

//  stich the routes to server Routes calling routes and passing object 
require("./routes/auth.routes")(app);

// Start server
app.listen(server_config.PORT, () => {
    console.log(`Server started on port ${server_config.PORT}`);
});
