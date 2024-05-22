const express = require("express")
const router = express.Router()

const tableauxController = require("../controller/tableauxController")

router.get("/", tableauxController.selectAll)
router.get("/:id", tableauxController.selectOne)
router.post("/", tableauxController.create)
router.put("/:id", tableauxController.update)
router.delete("/:id", tableauxController.delete)

module.exports = router