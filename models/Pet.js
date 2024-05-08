const { DataTypes } = require('sequelize') //Definir os tipos de dados
const db = require('../db/conn') // Conexão com o banco de dados
const Tutor = require('./Tutor') // Importando o Tutor

const Pet = db.define('Pet', {
  name: {
    type: DataTypes.STRING,
    require: true
  },
  species: {
    type: DataTypes.STRING,
    require: true
  },
  carry: {
    type: DataTypes.STRING,
    require: true
  },
  weight: {
    type: DataTypes.DATE,
    require: true
  },
  date_of_birth: {
    type: DataTypes.STRING,
    require: true
  }
})

// Relacionamento:
Tutor.hasMany(Pet) // Um tutor pode ter muitos pets
Pet.belongsTo(Tutor) // Um pet só poder ter um Tutor 

module.exports = Pet