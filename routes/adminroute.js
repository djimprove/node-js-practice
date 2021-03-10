const express = require("express");

const router = express.Router();

const userform = ` <form action="/admin/adduser" method="post">
<input type="text" name="username" placeholder="enter name" value="mario"/>
<button type="submit">Submit</button>
</form>`;
router.get("/adduser", (req, res) => {
  res.send(userform);
});

router.post("/adduser", (req, res) => {
  console.log(req.body.username);
  res.send("suceessful");
});

module.exports = router;
