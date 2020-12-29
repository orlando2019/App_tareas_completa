const { Router } = require('express');
const router = Router();

const {
	renderIndex,
	renderAbout,
	renderHome,
} = require('../controllers/index.controller');

router.get('/', renderIndex);

router.get('/home', renderHome);

router.get('/about', renderAbout);

module.exports = router;
