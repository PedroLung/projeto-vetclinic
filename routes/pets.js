const express = require('express')
const router = express.Router()
const Pet = require('../models/Pet')
const Tutor = require('../models/Tutor')

// Rota POST
router.post('/create/:id', async (req, res) => {
  const TutorId = req.params.id
  const name = req.body.name
  const species = req.body.species
  const carry = req.body.carry
  const weight = req.body.weight
  const date_of_birth = req.body.date_of_birth

  const pet = {
    TutorId,
    name,
    species,
    carry,
    weight,
    date_of_birth
  }

  await Pet.create(pet)
  res.send(pet)
})

// Rota GET
router.get('/view', async (req, res) => {
  const pet = await Pet.findAll()
  console.log(pet)
  res.send(pet)
})

// Rota PUT
router.post('/update/:id', async (req, res) => {
  const id = req.params.id
  const name = req.body.name
  const species = req.body.species
  const carry = req.body.carry
  const weight = req.body.weight
  const date_of_birth = req.body.date_of_birth

  const pet = {
    id,
    name,
    species,
    carry,
    weight,
    date_of_birth
  }

  await Pet.update(pet, { where: {id : id}})
  res.send(pet)
})

// Rota DELETE
router.post('/delete/:id', async (req, res) => {
  const TutorId = req.params.id
  const id = req.body.id

  await Pet.destroy({where: {id: id} })

  res.send('Pet Deletado')
})

module.exports = router