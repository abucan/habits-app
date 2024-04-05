const { getAllUsers, getSingleUser, showLoggedInUser } = require('../controllers/userController');
const { authenticateUser, authorizePermissions } = require('../middleware/authenticate');
const router = require('express').Router();

router.route('/').get(authenticateUser, authorizePermissions('admin'), getAllUsers);
router.route('/showCurrent').get(authenticateUser, showLoggedInUser);
router.route('/:id').get(authenticateUser, getSingleUser);

module.exports = router;