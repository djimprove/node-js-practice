const express = require("express");

const app = express();

// body parser
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

const port = 3000;
const userForm = `<form action="/user" method="POST">
<input type="text" name="username" placeholder="enter name" value="mario"/>
<button type="submit">Submit</button>
</form>`;

// handle all paths
// app.use((req, res, next) => {
//   console.log("listen all requests");
//   res.send(`<h1 style="color:red">we are going to know</h1>`);
// });
// app.use((req, res, next) => {
//   console.log(`user routes`);
//   next();

//   //   res.send(`user route`);
// });
// app.use((req, res, next) => {
//   // next used to get next passes control to next routes
//   res.send(`<div>/ route</div>`);
// });

app.get("/", (req, res) => {
  res.send(userForm);
});
app.post("/user", (req, res) => {
  // req.body body added new field for parsing
  console.log(req.body.username);
  res.redirect("/");
});

app.use((req, res) => {
  res.send("there is no matching routes");
});

app.listen(port, () => {
  console.log("====================================");
  console.log(`app running on... http://localhost:${port}`);
  console.log("====================================");
});
