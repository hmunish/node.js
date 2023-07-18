const fs = require("fs");

const handleRequests = (req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === "/home") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html><body><h1>Welcome home</h1></body></html>");
    return res.end();
  } else if (url === "/about") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html><body><h1>Welcome to About us page</h1></body></html>");
    return res.end();
  } else if (url === "/node") {
    res.setHeader("Content-Type", "text/html");
    res.write(
      "<html><body><h1>Welcome to my node js project</h1></body></html>"
    );
    return res.end();
  } else if (url === "/message" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
    });

    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split("=")[1];
      fs.writeFileSync("message.txt", message);
    });
    res.statusCode = 302;
    res.setHeader("Location", "/");
    return res.end();
  } else {
    const message = fs.readFileSync("message.txt");
    res.setHeader("Content-Type", "text/html");
    res.write(
      `<html><body><form method='POST' action='/message'><h3>${message}</h3><input type='text' name='message'><button type='submit'>Submit</button></form></body></html>`
    );
    return res.end();
  }
};

// module.exports = handleRequests;

// module.exports = {
//   handler: handleRequests,
// };

// module.exports.handler = handleRequests;

exports.handler = handleRequests;
