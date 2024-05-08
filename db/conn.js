const { Sequelize } = require('sequelize') // Importando o Sequelize
// Definindo a configuração geral do banco de dados
const sequelize = new Sequelize('vetClinic', 'root', 'marte135', {
  host: 'localhost',
  dialect: 'mysql'
})
// Exportando o banco de dados
module.exports = sequelize