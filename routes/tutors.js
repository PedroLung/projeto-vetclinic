const express = require('express')
const router  = express.Router()
const Tutor = require('../models/Tutor')
const Pet = require('../models/Pet')

//Rota Get
// Ver todos os Tutores cadastrados
router.get('/view', async (req, res) => {

  const tutor = await Tutor.findAll({include: Pet})
  console.log(tutor)
  res.send(tutor)
})

// Ver Tutores individuais
router.get('/view/:id', async (req, res) => {
  const id = req.params.id

  const tutor = await Tutor.findOne({include: Pet, where: {id: id} })
  console.log(tutor)
  res.send(tutor)
})

//Rota Post
router.post('/create', async (req, res) => {
  const name = req.body.name
  const phone = req.body.phone
  const email = req.body.email
  const date_of_birth = req.body.date_of_birth
  const zip_code = req.body.zip_code

  const tutor = {
    name,
    phone,
    email,
    date_of_birth,
    zip_code,
  }

  await Tutor.create(tutor)
  console.log(tutor)
  res.send(tutor)
})

// Rota PUT
router.post('/update/:id', async (req, res) => {
  const id = req.params.id
  const name = req.body.name
  const phone = req.body.phone
  const email = req.body.email
  const date_of_birth = req.body.date_of_birth
  const zip_code = req.body.zip_code

  const tutor = {
    name,
    phone,
    email,
    date_of_birth,
    zip_code,
  }

  await Tutor.update(tutor, {where: {id: id} })
  res.send(tutor)
})

// Rota DELETE
router.post('/delete/:id', async (req, res) => {
  const id = req.params.id

  await Tutor.destroy({where: {id: id} })
  res.send('Deletado')
})


module.exports = router