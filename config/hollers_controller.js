const express = require("express");
const { User } = require("../models");
const router = express.Router();

// Middleware
router.use(express.json());
router.use(express.urlencoded({ extended: false }));

const db = require("../models");

// New Holler
router.get("/new", async (req, res) => {
  const allUsers = await db.User.find();
  const context = { users: allUsers };
  res.render("new.ejs", context);
});

// Post Request for New Holler
router.post("/", async (req, res) => {
  const createdHoller = req.body;
  try {
    const newHoller = await db.Holler.create(createdHoller);
    res.redirect("/hollers");
  } catch (err) {
    console.log(err);
    res.redirect("/404");
  }
});

// Show Page for Specific Holler
router.get("/:hollerIndex", async (req, res) => {
  try {
    const foundHoller = await db.Holler.findById(req.params.hollerIndex);
    res.render("show.ejs", { holler: foundHoller, id: foundHoller._id });
  } catch (err) {
    console.log(err);
    res.redirect("/404");
  }
});

// Show all Hollers
router.get("/", async (req, res) => {
  try {
    const allHollers = await db.Holler.find();
    const allUsers = await db.User.find();
    const context = { hollers: allHollers, users: allUsers };
    res.render("index.ejs", context);
  } catch (err) {
    console.log(err);
    res.redirect("/404");
  }
});

// Delete Holler
router.delete("/:hollerId", async (req, res) => {
  try {
    const foundHoller = await db.Holler.findByIdAndDelete(req.params.hollerId);
    return res.redirect("/hollers");
  } catch (err) {
    console.log(err);
    res.redirect("/404");
  }
});

// Edit Holler Page
router.get("/:hollerId/edit", async (req, res) => {
  try {
    const foundHoller = await db.Holler.findById(req.params.hollerId);
    res.render("edit.ejs", { holler: foundHoller, id: foundHoller._id });
  } catch (err) {
    console.log(err);
    res.redirect("/404");
  }
});

// Updating Holler
router.put("/:hollerId", async (req, res) => {
  try {
    const updatedData = req.body;
    await db.Holler.findByIdAndUpdate(req.params.hollerId, updatedData, {
      new: true,
    });
    res.redirect(`/hollers/${req.params.hollerId}`);
  } catch (err) {
    console.log(err);
    res.redirect("/404");
  }
});

module.exports = router;
