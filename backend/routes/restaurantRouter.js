const express = require("express")
const router = express.Router()

const restaurantController = require("../controller/restaurantController")

router.get("/Foodball", restaurantController.selectAllFoodball)
router.get("/", restaurantController.selectAll)
router.get("/:id", restaurantController.selectOne)
router.post("/", restaurantController.create)
router.put("/:id", restaurantController.update)
router.put("/:id/cloudinary", restaurantController.cloudinary)
router.delete("/:id", restaurantController.delete)

module.exports = router