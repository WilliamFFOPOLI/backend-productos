const express = require("express");
const router = express.Router();
const controller = require("../controllers/producto.controller");

router.post("/productos", controller.create);
router.get("/productos", controller.findAll);
router.get("/productos/:id", controller.findOne);
router.put("/productos/:id", controller.update);
router.delete("/productos/:id", controller.delete);

module.exports = router;
