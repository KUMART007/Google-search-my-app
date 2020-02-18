const router = require("express").Router();
var viewRoutes= require("./view")
const bookRoutes = require("./books");

// Book routes
router.use("/", bookRoutes);
router.use("/", viewRoutes)

module.exports = router;