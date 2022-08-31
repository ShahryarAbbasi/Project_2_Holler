const express = require("express");
const router = express.Router();
router.use(express.json());
router.use(express.urlencoded({ extended: false }));

const db = require("../models");

// getting the form for a new user
router.get("/new", (req, res) => {
  res.render("user/new.ejs");
});

// creating a new user
router.post("/", async (req, res) => {
  const createdUser = req.body;
  try {
    const newUser = await db.User.create(createdUser);
    
    res.redirect("/user");
  } catch (err) {
    console.log(err);
    res.redirect("/404");
  }
});

// specific info on a single user
router.get("/:userIndex", async (req, res) => {
  try {
    const foundUser = await db.User.findById(req.params.userIndex);
    res.render("user/user.ejs", { user: foundUser, id: foundUser._id });
  } catch (err) {
    console.log(err);
    res.redirect("/404");
  }
  // res.send(`Show holler ${req.params.id} `);
});
// // getting all the users
// router.get("/", (req, res) => {
//   res.render("");
// });

// editing info on a user
router.put("/:id", (req, res) => {
  res.send("edit user");
});
// deleting a user
router.delete("/:id", (req, res) => {
  res.send("delete user");
});
module.exports = router;
