const express = require("express");
const router = express.Router();
router.use(express.json());
router.use(express.urlencoded({ extended: false }));

const db = require("../models");

// New User Form
router.get("/new", (req, res) => {
  res.render("user/new.ejs");
});

// Creating New User
router.post("/", async (req, res) => {
  const createdUser = req.body;
  try {
    const newUser = await db.User.create(createdUser);
    res.redirect("/hollers");
  } catch (err) {
    console.log(err);
    res.redirect("/404");
  }
});

// Single User Page
router.get("/:userIndex", async (req, res) => {
  try {
    const foundUser = await db.User.findById(req.params.userIndex);
    const foundHoller = await db.Holler.find();
    res.render("user/user.ejs", {
      user: foundUser,
      id: foundUser._id,
      hollers: foundHoller,
    });
  } catch (err) {
    console.log(err);
    res.redirect("/404");
  }
});

// *STRETCH FEATURES*
// Edit User Info 
router.put("/:id", (req, res) => {
  res.send("edit user");
});

// Delete User
router.delete("/:id", (req, res) => {
  res.send("delete user");
});

module.exports = router;
