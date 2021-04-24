const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const User = require("../models/user");

router.get("/", async (req, res) => {
  console.log("Now in => '/'");
  try {
    const user = await User.find();
    console.log(user);
    res.json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
