const express = require("express");

const rootDir = require("../util/path");

const router = express.Router();

const userform = ` <form action="/admin/adduser" method="post">
<input type="text" name="username" placeholder="enter name" value="mario"/>
<button type="submit">Submit</button>
</form>`;
router.get("/adduser", (req, res) => {
  res.sendFile(rootDir, "views", "Users.html");
});

router.post("/adduser", (req, res) => {
  console.log(req.body.username);
  res.send("suceessful");
});

module.exports = router;
