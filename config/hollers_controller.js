const express = require("express");
const { User } = require("../models")
const router = express.Router();

// Middleware that might be needed later on
router.use(express.json());
router.use(express.urlencoded({extended:false}));

const db = require("../models");
// All hollers
// router.get("/", (req, res) => {
//   res.send("All the hollers right here");
// });
// getting the form for a new holler
router.get("/new", (req, res) => {
  const allUsers = db.User.find();
  const context = { users: allUsers };
  res.render("new.ejs", context);
});

// Post request for adding new holler to db
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


// Show a specific holler
router.get("/:hollerIndex", async (req, res) => {
  try {
    const foundHoller = await db.Holler.findById(req.params.hollerIndex);
    res.render("show.ejs", { holler: foundHoller, id: foundHoller._id });
  } catch (err) {
    console.log(err);
    res.redirect("/404");
  }
  // res.send(`Show holler ${req.params.id} `);
});


// post request for all hollers from holler db
router.get("/", async (req, res) => {
  try {
    const allHollers = await db.Holler.find();
    const allUsers = await db.User.find();
   
    // const foundThreads = await Thread.find().populate({path: 'user', model: 'User'})
    const context = { hollers: allHollers, users: allUsers};
    res.render("index.ejs", context);
  } catch (err) {
    console.log(err);
    res.redirect("/404");
  }
});

// deleting a holler
router.delete("/:hollerId", async (req, res) => {
  try {
    const foundHoller = await db.Holler.findByIdAndDelete(req.params.hollerId);
    return res.redirect("/hollers");
  } catch (err) {
    console.log(err);
    res.redirect("/404");
  }
});

// editing a holler
router.get("/:hollerId/edit", async (req, res) => {
  try {
    const foundHoller = await db.Holler.findById(req.params.hollerId);
    res.render("edit.ejs", { holler: foundHoller, id: foundHoller._id });
  } catch (err) {
    console.log(err);
    res.redirect("/404");
  }
});

// update router
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
