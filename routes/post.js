const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const User = require("../models/user");

router.post("/post", async (req, res) => {
  console.log("now in '/post'");
  console.log(req.fields);
  try {
    const newUser = new User({
      name: req.fields.name,
      email: req.fields.email,
    });

    await newUser.save();
    console.log("success");
    res.status(200).json({ message: "success" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
