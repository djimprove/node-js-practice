const express = require("express");

const router = express.Router();

const userList = `<ul>
<li>User List</li>
<li>User 1</li>
<li>User 2</li>
<li>User 3</li>
<li>User 4</li>
</ul>`;
router.get("/user", (req, res) => {
  res.send(userList);
});

router.post("/user", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

module.exports = router;
