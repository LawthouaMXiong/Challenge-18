const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  postUser,
  putUser,
  deleteUser,
} = require('../../controllers/userController');

router.route('/')
  .get(getUsers)
  .post(postUser);

router.route('/:userId')
  .get(getSingleUser)
  .put(putUser)
  .delete(deleteUser);

module.exports = router;