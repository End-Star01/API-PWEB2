const express = require('express');

const router = express.Router();

const Aluno = require('./aluno');

// Banco de dados de exemplo
const alunos = [
  { id: 1, nome: 'João', idade: 20 },
  { id: 2, nome: 'Maria', idade: 21 },
  { id: 3, nome: 'José', idade: 19 },
  { id: 4, nome: 'Alef', idade: 22 },
];

// Operações CRUD do recurso aluno
router.get('/', async (req, res) => {
  //https://sequelize.org/docs/v6/core-concepts/model-querying-finders/
  const alunos = await Aluno.findAll()
  res.send(alunos);
});

router.get('/:id', async (req, res) => {
  const alunoId = req.params.id;
  //https://sequelize.org/docs/v6/core-concepts/model-querying-finders/
  const aluno = await Aluno.findByPk(alunoId)
  res.send(aluno);
});

router.get('/:id/nome', async (req, res) => {
  const aluno = await Aluno.findByPk(alunoId)

  res.send({
    nome: aluno.nome
  })
})

router.post('/', async (req, res) => {
  let novoAluno = req.body;
  novoAluno = await Aluno.create(req.body)
  res.send({ message: 'Aluno adicionado com sucesso', aluno: novoAluno });
});

router.put('/:id', async (req, res) => {
  const alunoId = req.params.id; 
  const dadosNovosAluno = req.body;

  let aluno = await Aluno.findByPk(alunoId);

  if (aluno) {
    aluno.set({...dadosNovosAluno})
    await aluno.save();
    res.send({ message: 'Aluno atualizado com sucesso'});
  } else {
    res.status(404).send({ message: 'Aluno não encontrado' });
  }
});

router.delete('/:id', async (req, res) => {
  const alunoId = req.params.id;
  let aluno = await Aluno.findByPk(alunoId);
  if (aluno) {
    await aluno.destroy();
    res.send({ message: 'Aluno excluído com sucesso' });
  } else {
    res.status(404).send({ message: 'Aluno não encontrado' });
  }
});

module.exports = router;

