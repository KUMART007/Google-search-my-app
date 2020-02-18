const router = require("express").Router();
const booksController = require("../../../bookController.js");

// Matches with "/api/books"
router.route("/", function(req, res){
  
  res.sendFile(path.join(__dirname, "../../../../index.html"));


})
router.route("/books")
  .get(booksController.findAll)
  .post(booksController.create);

// Matches with "/api/books/:id"
router
  .route("/books/:id")
  .get(booksController.findById)
  .put(booksController.update)
  .delete(booksController.remove);

module.exports = router;