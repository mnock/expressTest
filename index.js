const express = require("express");
const usersRouter = require("./routes/users");
var path = require('path');
const app = express();

var compression = require('compression');
app.use(compression());
const port = 3000;

app.get("/ck", (req, res) => {
  res.send("Hello World ck!");
});

app.use(express.static(path.join(__dirname, 'public/web')));

app.get('/:name', function (req, res) {
  res.sendFile(__dirname + '/public/web/index.html');
})
app.use("/users", usersRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
