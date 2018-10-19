const express = require("express");
const router = express.Router();

//Item Model

const Item = require("../../model/Item");

//route of get api/items

//get all item
router.get("/", (req, res) => {
  Item.find()
    .sort({ date: -1 })
    .then(items => {
      console.log(items);
      res.json(items);
    })
    .catch(err => {
      console.log(err);
    });
});

//route of post api/items

//post all item
router.post("/", (req, res) => {
  const newItem = new Item({
    name: req.body.name
  });
  newItem.save().then(item => res.json(item));
});

//route of delete api/items
//delete  item

router.delete("/:id", (req, res) => {
  Item.findById(req.params.id).then(item => {
    item.remove().then(() => res.json({ success: true }));
  }).catch(err=>res.status(404).json({success:false}));

})
module.exports = router;
