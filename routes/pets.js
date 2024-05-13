const express = require('express')
const router = express.Router()
const Pet = require('../models/Pet')
const Tutor = require('../models/Tutor')
const { where } = require('sequelize')

// Rota POST
router.post('/:tutorId', async (req, res) => {
  const TutorId = req.params.tutorId
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
router.get('', async (req, res) => {
  const pet = await Pet.findAll()
  console.log(pet)
  res.send(pet)
})

// Rota PUT
router.put('/:petId/tutor/:tutorId', async (req, res) => {
  const petId = req.params.petId
  const tutorId = req.params.tutorId
  const name = req.body.name
  const species = req.body.species
  const carry = req.body.carry
  const weight = req.body.weight
  const date_of_birth = req.body.date_of_birth

  const pet = {
    petId,
    name,
    species,
    carry,
    weight,
    date_of_birth
  }
  const tutor = await Tutor.findOne({where: {id: tutorId} })
  const pets = await tutor.getPets({ where: {id : petId} })
  if(pets.length > 0) {
    await pets[0].update(pet)
  }

  res.send(pet)
})

// Rota Patch
router.patch('/patch/:petId/tutor/:tutorId', async (req, res) => {
  const petId = req.params.petId
  const tutorId = req.params.tutorId

  const tutor = await Tutor.findOne({ where: {id: tutorId} })
  const pets = await tutor.getPets({ where: {id: petId} })
  if (pets.length > 0) {
    let pet = pets[0]

    const data = ['name', 'species', 'carry', 'weight']
    data.forEach((dado) => {
      if (req.body[dado]) {
        pet[dado] = req.body[dado]
      }
    })
    // Verificação de Data válida
    let dateOfBirth = new Date(req.body.date_of_birth)
    if (!isNaN(dateOfBirth.getTime())) {
      pet.date_of_birth = dateOfBirth
    }

    await pet.save()
    res.send(pet)
  } else {
    res.status(404).send({message: 'Esse Pet não existe'})
  }
})

// Rota DELETE
router.delete('/:petId/tutor/:tutorId', async (req, res) => {
  const petId = req.params.petId
  const tutorId = req.params.tutorId

  const tutor = await Tutor.findOne({ where: {id: tutorId} })
  const pets = await tutor.getPets({ where: {id: petId} }) 

  if(pets.length > 0) {
    await pets[0].destroy()
    res.send('Pet Deletado')
  } else {
    res.status(404).send({message: 'Pet not found'})
  }

})

module.exports = router