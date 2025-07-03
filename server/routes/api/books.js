const express = require('express');

const router = express.Router();

//Carrega o Book model
const Book = require('../../models/Book');

//GET api/books/test
//Rota para testar livros
router.get('/test', (req, res) => res.send('Testando rota book'));

//GET api/books
//Pegar todos os livros

router.get('/', (req, res) => {
    Book.find()
    .then(books => res.json(books))
    .catch(err => res.status(404).json({nobooksfound: 'Nenhum livro encontrato'}));
});

//GET api/books/:id

router.get('/:id', (req, res) => {
    Book.findById(req.params.id)
    .then(book => res.json(book))
    .catch(err => res.status(404).json({nobooksfound: 'Nenhum livro encontrato'}));
});

//Post api/books
//Adicionar/Salvar livro
router.post('/', (req, res) => {
    Book.create(req.body)
    .then(book => res.json({msg: 'Livro Adicionado com Sucesso!'}))
    .catch(err => res.status(400).json({error: 'Não foi possível adcionar este Livro!'}));
});

//PUT api/books:id
//Atualizar livro
router.put('/:id', (req, res) => {
    Book.findByIdAndUpdate(req.params.id, req.body)
    .then(book => res.json({msg: 'Livro atualizado com Sucesso!'}))
    .catch(err => res.status(400).json({error: 'Não foi possível atualizar o Livro!'}));
});

//Delete api/books/:id
//Deletar o livro por id
router.delete('/:id', (req, res) => {
    Book.findByIdAndDelete(req.params.id, req.body)
    .then(book => res.json({msg: 'Livro deletado com Sucesso!'}))
    .catch(err => res.status(400).json({error: 'Não foi possível deletar o Livro!'}));
});

module.exports = router;