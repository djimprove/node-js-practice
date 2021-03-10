const express = require("express");
const path = require("path");

const rootDir = require("../util/path");
const router = express.Router();

router.get("/users", (req, res) => {
  res.sendFile(path.join(rootDir, "views", "users.html"));
});

router.post("/users", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

router.get("/adduser", (req, res, next) => {
  res.redirect("/");
});

module.exports = router;
