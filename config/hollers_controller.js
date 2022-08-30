const express = require("express");
const router = express.Router();
// All hollers
router.get("/", (req, res) => {
  res.send("All the hollers right here");
});
// getting the form for a new holler
router.get("/new", (req, res) => {
  res.send("holler  New Form ");
});
// creating a new holler
router.post("/", (req, res) => {
  res.send("create holler");
});
// show a specific holler
router.get("/:id", (req, res) => {
  res.send("holler get ");
});
// editing info on a holler
router.put("/:id", (req, res) => {
  res.send("edit holler");
});
// deleting a holler
router.delete("/:id", (req, res) => {
  res.send("delete holler");
});
module.exports = router;
