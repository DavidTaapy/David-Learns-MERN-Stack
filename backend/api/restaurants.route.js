import express from "express"
import RestaurantsCtrl from "./restaurants.controller.js"

// Express Router
const router = express.Router()

// Set a route
router.route("/").get(RestaurantsCtrl.apiGetRestaurants)

// Test Function for Route
// router.route("/").get((req, res) => res.send("Hello world!"))

// Router as Only Export
export default router