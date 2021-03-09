const http = require("http");

const server = http.createServer((req, res) => {
  const { url, method } = req;
  if (url === "/" && method === "GET") {
    const userform = ` <form action="/createuser" method="post">
    <input type="text" placeholder="enter username" name="username">
    <button type="submit">create User</button>`;
    res.setHeader("Content-Type", "text/html");
    res.write(userform);
    res.end();
  }
  if (url === "/user" && method === "GET") {
    const dummyUsers = ` <ul>
    <li>User1</li>
    <li>User2</li>
    <li>User3</li>
    <li>User4</li>
    <li>User5</li>
</ul>`;
    res.setHeader("Content-Type", "text/html");
    res.write(dummyUsers);
    res.end();
  }

  if (url === "/createuser" && method === "POST") {
    const data = [];
    req.on("data", (chunk) => {
      data.push(chunk);
    });
    req.on("end", () => {
      console.log(Buffer.concat(data).toString().split("=")[1]);
      res.statusCode = 302;
      res.setHeader("Location", "/");
      res.end();
    });
  }
});
server.listen(5000, () => {
  console.log("====================================");
  console.log("Listining on 5000");
  console.log("====================================");
});
