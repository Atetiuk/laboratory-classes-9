const Book = require('../models/Book');
const Author = require('../models/Author');

exports.getAllBooks = async (req, res) => {
    const books = await Book.find().populate('author');
    res.status(200).json(books);
};

exports.addBook = async (req, res) => {
    const { title, year, author } = req.body;

    const existingAuthor = await Author.findById(author);
    if (!existingAuthor) return res.status(400).json({ error: 'Author not found' });

    const newBook = new Book({ title, year, author });
    await newBook.save();
    res.status(201).json(newBook);
};

exports.deleteBook = async (req, res) => {
    const deleted = await Book.findByIdAndDelete(req.params.id);
    if (deleted) res.status(204).end();
    else res.status(404).json({ error: 'Book not found' });
};
