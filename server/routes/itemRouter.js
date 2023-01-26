//handles requests for items

const express = require("express");

const router = express.Router();

const Item = require("../models/itemModel");

router.get("/items", async (req, res) => {
  try {
    const items = await Item.find();
    res.status(200).send({ data: items });
  } catch (err) {
    res.status(400).send({ error: err });
  }
});

router.get("/items-by-cat", async (req, res) => {
  try {
    const items = await Item.aggregate([
      { $match: {} },
      {
        $group: {
          _id: "$category",
          items: { $push: "$$ROOT" },
        },
      },
      { $project: { name: "$_id", items: 1, _id: 0 } },
    ]);
    res.status(200).send({ data: items });
  } catch (e) {
    res.status(400).send({ error: e });
  }
});

module.exports = router;
