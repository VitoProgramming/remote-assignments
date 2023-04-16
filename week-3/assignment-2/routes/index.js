const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("<h1>Hello, My Server!</h1>");
});

router.get("/getData", (req, res) => {
  const { number } = req.query;
  let sum = "";

  if (typeof number === "undefined") {
    res.send("<h1>Lack of Parameter</h1>");
  } else if (isNaN(number)) {
    res.send("<h1>Wrong Parameter</h1>");
  } else if (Number(number) > 0) {
    for (let i = 1; i <= Number(number); i++) {
      sum += `${i}+`;
    }
    sum = sum.substr(0, sum.length - 1);
    res.send(`<h1>${sum}</h1>`);
  }
});

module.exports = router;
