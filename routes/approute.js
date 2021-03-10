const express = require("express");
const router = express.Router();
const userform = ` <form action="/user" method="post">
<input type="text" name="username" placeholder="enter name" value="mario"/>
<button type="submit">Submit</button>
</form>`;

router.get("/", (req, res, next) => {
  res.send(userform);
});

// error route

module.exports = router;
