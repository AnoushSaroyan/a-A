const express = require("express");
const mongoose = require("mongoose");
const User = require('./models/User');
const Category = require("./models/Category");
const Product = require("./models/Product");
const bodyParser = require("body-parser");
const db = require("../config/keys").MONGO_URI;
const expressGraphQL = require("express-graphql");
const app = express();
const schema = require('./schema/schema'); 

if (!db) {
    throw new Error("You must provide a string to connect to MongoDB Atlas");
}

mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => console.log("Connected to MongoDB successfully"))
    .catch(err => console.log(err));

// remember we use bodyParser to parse requests into json
app.use(bodyParser.json());
app.use(
    "/graphql",
    expressGraphQL({
        schema,
        graphiql: true
    })
);

module.exports = app;