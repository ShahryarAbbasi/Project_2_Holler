const express = require("express");
const router = express.Router();
// getting all the users
router.get("/", (req, res) => {
  res.send("User List");
});
// getting the form for a new user
router.get("/new", (req, res) => {
  res.send("User New Form ");
});
// creating a new user
router.post("/", (req, res) => {
  res.send("create user");
});
// specific info on a single user
router.get("/:id", (req, res) => {
  res.send("User get");
});
// editing info on a user
router.put("/:id", (req, res) => {
  res.send("edit user");
});
// deleting a user
router.delete("/:id", (req, res) => {
  res.send("delete user");
});
module.exports = router;