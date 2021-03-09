// console.log("hii this is simple program..");
// const firstName = "dnyaneshwar";
// const lastName = "jawane";
// const fullName = function (firstName, lastName) {
//   console.log(firstName + " " + lastName);
// };

// const user = {
//   firstName: "dnyaneshwar",
//   lastName: "jawane",
//   age: 25,
//   fullName() {
//     return this.firstName + " " + this.lastName;
//   },
//   getUserDetails() {
//     return `My name is ${this.firstName} ${this.lastName} and age is ${this.age}`;
//   },
// };

// console.log("************************Normal Details********************");

// // console.log("your frist name " + firstName + " & last name is " + lastName);
// // console.log(fullName(firstName, lastName));

// console.log("************************User Details********************");

// console.log(user.getUserDetails());
// {
//   const { firstName, lastName } = user;
//   console.log(firstName, lastName);
// }

// create node js server

// const fs = require("fs");
// console.log(fs);

// fs.writeFileSync("abc.text", "yes we are writing in file");

const http = require("http");
// console.log(http);
// function requestListener(req, res) {
//   console.log(req, res);

// }

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;
  // console.log(req.url, "headers", req.headers, req.method);
  // //   setting headers
  // res.setHeader("Content-Type", "text/json");

  // //   sending responce to back to browser
  // res.write("{name:dnyaneshwar}");
  // res.end();

  // creating routes
  if (url === "/" && method === "GET") {
    res.setHeader("Content-Type", "text/html");

    const inputform = `<html>
    <title>Node js App</title>
    <body>
     <form action="/fullname" method="POST"  >
     <input type="text" name="firstName" value="mario" placeholder="enter frist name"/>
     <input type="text" name="lastName" value="luigi" placeholder="enter last name"/>
    <input type="submit" /> 
     </form>
    </body>
    </html>
    `;
    res.write(inputform);
    return res.end();
  }
  if (url === "/fullname" && method === "POST") {
    // redirects
    // status code for redirect 302
    // res.statusCode = 302;
    // res.setHeader("LOCATION", "/");

    res.setHeader("Content-Type", "text/json");
    const body = [];
    // let fullName = "";
    // console.log("its called");
    req.on("data", (chunk) => {
      body.push(chunk);
    });
    req.on("end", () => {
      const data = Buffer.concat(body).toString();
      let [firstName, lastName] = data.split("&");
      firstName = firstName.split("=")[1];
      lastName = lastName.split("=")[1];
      res.write("Your full name is " + firstName + " " + lastName);
      return res.end();
    });

    // return res.end();
  }
});

server.listen(3000);
