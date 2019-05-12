var router = require("express").Router();
var { saveOrder } = require("../db/cart");

router.post("/save", (req, res) => {
  saveOrder(req.body)
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.status(400).send({ message: err.message });
    });
});

module.exports = router;
