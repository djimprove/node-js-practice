const express = require("express");

const app = express();
const appRoutes = require("./routes/approute");
const userRoutes = require("./routes/userroute");
const adminRoutes = require("./routes/adminroute");

// body parser
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// routing

// user routing
app.use(userRoutes);

app.use(appRoutes);

// admin routes
app.use("/admin", adminRoutes);

// 404 page

app.use((req, res) => {
  res.send(`<div>not found 404</div>`);
});

const port = 3000;

app.listen(port, () => {
  console.log("====================================");
  console.log(`app running on... http://localhost:${port}`);
  console.log("====================================");
});
