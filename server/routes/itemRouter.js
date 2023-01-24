const express = require("express");

const router = express.Router();

const Item = require("../models/itemModel");

router.get("/items", async (req, res) => {
  try {
    const items = await Item.find();
    res.status(200).send({ data: products });
  } catch (err) {
    res.status(400).send({ error: err });
  }
});

module.exports = router;
