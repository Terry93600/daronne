const express = require("express")
const router = express.Router()

const categoriesController = require("../controller/categoriesController")

router.get("/", categoriesController.selectAll)
router.get("/:id", categoriesController.selectOne)
router.post("/", categoriesController.create)
router.put("/:id", categoriesController.update)
router.delete("/:id", categoriesController.delete)

module.exports = router