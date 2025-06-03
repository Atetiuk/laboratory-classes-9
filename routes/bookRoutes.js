const express = require('express');
const router = express.Router();
const bookControllers = require('../controllers/bookControllers');

router.get('/', bookControllers.getAllBooks);
router.post('/', bookControllers.addBook);
router.delete('/:id', bookControllers.deleteBook);

module.exports = router;
