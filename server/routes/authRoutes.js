const {
  login,
  register,
  verifyEmail,
  logout,
} = require('../controllers/authController');
const { authenticateUser } = require('../middleware/authenticate');

const router = require('express').Router();

router.route('/login').post(login);
router.route('/register').post(register);
router.route('/verify-email').post(verifyEmail);
router.route('/logout').delete(authenticateUser, logout)

module.exports = router;
