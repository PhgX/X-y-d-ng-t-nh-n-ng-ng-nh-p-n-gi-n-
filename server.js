const http = require("http");
const fs = require("fs");
const url = require("url");

let server = http.createServer((req, res) => {
  let parseUrl = url.parse(req.url, true);
  let path = parseUrl.pathname;
  let trimPath = path.replace(/^\/+|\/+$/g, "");

  let chosenHandler =
    typeof router[trimPath] !== undefined
      ? router[trimPath]
      : handlers.notFound;
  chosenHandler(req, res);
  
});

server.listen(3000, () => {
  console.log("Server is running on port 3000");
});

let handlers = {};

handlers.home = function (req, res) {
  fs.readFile("views/home.html", (err, data) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(data);
    return res.end();
  });
};

handlers.login = function (req, res) {
  fs.readFile("views/login.html", (err, data) => {   
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(data);
    return res.end();
  });
};

handlers.profile = function (req, res) {
  fs.readFile("views/profile.html",(err, data) => {   
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(data);
    return res.end();
  });
};

let router = {
  home: handlers.home,
  login: handlers.login,
  profile: handlers.profile,
};

