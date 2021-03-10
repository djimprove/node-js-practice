const express = require("express");
const path = require("path");

const app = express();
const appRoutes = require("./routes/approute");
const userRoutes = require("./routes/userroute");
const adminRoutes = require("./routes/adminroute");

// body parser
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// serve file statically
app.use(express.static(path.join(__dirname, "public")));

// routing

// user routing
app.use(userRoutes);

app.use(appRoutes);

// admin routes
app.use("/admin", adminRoutes);

// 404 page

app.use((req, res) => {
  res.sendFile(path.join(__dirname, "views", "404.html"));
});

const port = 3000;

app.listen(port, () => {
  console.log("====================================");
  console.log(`app running on... http://localhost:${port}`);
  console.log("====================================");
});
