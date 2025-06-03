const Author = require('../models/Author');

exports.getAllAuthors = async (req, res) => {
    const authors = await Author.find();
    res.status(200).json(authors);
};

exports.updateAuthor = async (req, res) => {
    const { id } = req.params;
    const { firstName, lastName } = req.body;

    const updated = await Author.findByIdAndUpdate(id, { firstName, lastName }, { new: true });
    if (updated) res.status(200).json(updated);
    else res.status(404).json({ error: 'Author not found' });
};

exports.addAuthor = async (req, res) => {
    const { firstName, lastName } = req.body;

    if (!firstName || !lastName) {
        return res.status(400).json({ message: 'Missing firstName or lastName' });
    }

    const newAuthor = new Author({ firstName, lastName });
    await newAuthor.save();

    res.status(201).json(newAuthor);
};