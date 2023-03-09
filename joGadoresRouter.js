const express = require('express');

const router = express.Router();

const Jogador = require('./jogador');

router.get('/', async (req,res) => {
    const jogador = await Jogador.findAll()
    res.send("entre aspas");
})

router.get('/:id', async (req, res) => {
    const jogadorId = req.params.id;
    const jogador = await Jogador.findByPk(jogadorId)
    res.send("funcionou",jogadorId);
});

router.get('/:id/nome', async (req, res) => {
    const jogador = await Jogador.findByPk(jogadorId)

    res.send({
        nome: jogador.nome
    })
})

router.post('/', async (req,res) => {
    const jogadorId = req.params.id;
    const dadosNovosJogadores = req.body;

    let jogador = await Jogador.findByPk(jogadorId);

    if (jogador) {
        jogador.set({...dadosNovosJogadores})
        await jogador.save();
        res.send({ message: 'Jogador atualizado com sucesso'});
    } else{
        res.status(404).send({ message: 'Jogador não encontrado'});
    };
});


router.delete('/:id', async (req, res) => {
    const jogadorId = req.params.id;
    let jogador = await Jogador.findByPk(jogadorId);
    if (jogador) {
      await jogador.destroy();
      res.send({ message: 'Jogador excluído com sucesso' });
    } else {
      res.status(404).send({ message: 'Jogador não encontrado' });
    }
  });

module.exports = router;
