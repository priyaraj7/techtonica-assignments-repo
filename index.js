let express = require("express");
let app = express();
let bodyParser = require("body-parser");

// Create application/x-www-form-urlencoded parser
let urlencodedParser = bodyParser.urlencoded({ extended: false });
const ejs = require("ejs");

const books = [];
app.use(express.static("public"));
app.get("/index.htm", function (req, res) {
  ejs.renderFile(__dirname + "/" + "index.html.ejs", { books }, (err, str) => {
    res.send(str);
  });
});
// get request

app.get("/search", function (req, res) {
  // Prepare output in JSON format
  const searchTerm = req.query.query;
  const response = books.filter(
    (b) => b.title && b.title.indexOf(searchTerm) !== -1
  );
  res.end(JSON.stringify(response));
});

app.post("/add", urlencodedParser, function (req, res) {
  // Prepare output in JSON format
  books.push(req.body);

  res.end(
    JSON.stringify({
      status: "success",
      message: `Book ${req.body.title} was added`,
    })
  );
});

let server = app.listen(8081, function () {
  let host = server.address().address;
  let port = server.address().port;

  console.log("Example app listening at http://%s:%s", host, port);
});
