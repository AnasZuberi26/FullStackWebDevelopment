const express = require("express");
const app = express();
const port = 3000;

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  //   res.send('Hello World!')
  //   res.sendFile("views/index.html", { root: __dirname });
  let siteName = "Adidas";
  let searchText = "Search Now";
  let arr = [1, 323, 87];
  res.render("index", {
    siteName: siteName,
    searchText: searchText,
    arr,
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
