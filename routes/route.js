// Importing modules for use in the routes
const express = require("express");
const router = express.Router();
// Require the database models to be used by the routes
const db = require("../models/database");
router.get("/home", (req, res) => {
    res.render("index")
});

module.exports = router;