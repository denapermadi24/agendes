var express = require('express');
var auth = require('./auth');
var router = express.Router();

//daftarkan menu registrasi
router.post('/agendes/admin/register', auth.registrasi);
router.post('/agendes/admin/login', auth.login);

module.exports = router;