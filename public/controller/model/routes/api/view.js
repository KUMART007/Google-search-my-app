const router = require("express").Router();
var path = require("path")

router.route("/", function(req, res){
    res.sendFile(path.join(__dirname, "../../../../index.html"));


})

module.exports = router;
