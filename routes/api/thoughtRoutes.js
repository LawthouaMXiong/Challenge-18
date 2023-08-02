const router = require("express").Router();
const {
  getThoughts,
  getSingleThought,
  postThought,
  putThought,
  deleteThought,
} = require("../../controllers/thoughtController");

router.route("/").get(getThoughts).post(postThought);

router
  .route("/:thoughtId")
  .get(getSingleThought)
  .put(putThought)
  .delete(deleteThought);

module.exports = router;