const {
  login,
  register,
  verifyEmail,
} = require('../controllers/authController');

const router = require('express').Router();

router.route('/login').post(login);
router.route('/register').post(register);
router.route('/verify-email').post(verifyEmail);

module.exports = router;
