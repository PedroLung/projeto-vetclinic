const { DataTypes } = require('sequelize') //Definir os tipos de dados
const db = require('../db/conn') // Conexão com o banco de dados

const Tutor = db.define('Tutor', {
  name: {
    type: DataTypes.STRING,
    require: true
  },
  phone: {
    type: DataTypes.STRING,
    require: true
  },
  email: {
    type: DataTypes.STRING,
    require: true
  },
  date_of_birth: {
    type: DataTypes.STRING,
    require: true
  },
  zip_code: {
    type: DataTypes.STRING,
    require: true
  }
})

module.exports = Tutor