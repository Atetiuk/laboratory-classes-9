const express = require('express');
const router = express.Router();
const authorControllers = require('../controllers/authorControllers');

router.get('/', authorControllers.getAllAuthors);
router.post('/', authorControllers.addAuthor);
router.put('/:id', authorControllers.updateAuthor);

module.exports = router;
