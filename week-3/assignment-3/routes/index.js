const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("<h1>Hello, My Server!</h1>");
});

router.get("/getData", (req, res) => {
  const { number } = req.query;
  let sum = 0;

  if (typeof number === "undefined") {
    res.send("Lack of Parameter");
  } else if (isNaN(number)) {
    res.send("Wrong Parameter");
  } else if (Number(number) > 0) {
    for (let i = 1; i <= Number(number); i++) {
      sum += i;
    }
    res.send(`${sum}`);
  }
});

module.exports = router;
