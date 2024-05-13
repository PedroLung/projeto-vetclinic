# Projeto-VetClinic

## Descrição

Este projeto é uma API simples que simula um sistema de gerenciamento para uma clínica veterinária.

No coração do nosso sistema, temos duas tabelas principais no banco de dados: `Tutores` e `Pets`. Cada tabela é acessível através de suas próprias rotas dedicadas, permitindo operações de CRUD (Criar, Ler, Atualizar e Deletar) independentes.

Com esta API, você pode:
- **Criar** novos cadastros de tutores e pets.
- **Ler** e recuperar informações existentes de tutores e pets.
- **Atualizar** informações de tutores e pets existentes.
- **Deletar** cadastros de tutores e pets quando necessário.

## Tecnologias Utilizadas

- ``JavaScript:`` Principal linguagem de programação do projeto.
- ``SQL:`` Linguagem usada para trabalhar com um banco de dados relacional.
- ``MySQL:`` SGBD (Sistema de Gerenciamento de Banco de Dados).
- ``Express:`` Framework do JavaScript que permite criarmos servidores web.
- ``Sequelize`` ORM para podermos fazer as querys do banco de dados no nosso código de forma mais fácil e rápida.

## Pré-requisitos

Antes de começar, certifique-se de ter o seguinte instalado:

- **Node.js**
- **npm**
- **Git**

## Índice

- Título do Projeto
- Descrição
- Tecnologias Usadas
- Pré-requisitos
- Índice
- Instalação
- Uso

# Instalação 

Siga estas etapas para instalar o projeto:

1. Clone o repositório:

```bash
git clone https://github.com/PedroLung/projeto-vetclinic.git
```

2. Navegue até o diretório do projeto:

```bash
cd projeto-vetclinic
```

3. Instale as dependências:

```bash
npm install
```

## Uso

Para testar e interagir com a API, vamos fazer uso de um aplicativo cliente HTTP, como o Postman, entretanto você pode usar da maneira que desejar. No Postman, irémos configurar algumas solicitações para as várias rotas da API e ver as respostas em tempo real. Mas antes você precisa inicializar o servidor

- No console digite:
```bash
npm start
```

- Agora vá para o seu aplicativo cliente HTTP de sua escolha e começe os testes.

Aqui estão as rotas disponíveis para a API. Todas as rotas começam com `localhost:3000`.

## Tutores

- **GET geral**: `/tutors`
- **GET específico**: `/tutors/:id`
- **POST**: `/tutor`
- **PUT**: `/tutor/:id`
- **PATCH**: `/tutor/patch/:id`
- **DELETE**: `/tutor/:id`

## Pets

- **Início de cada rota**: `/pets`
- **GET geral**: ``
- **POST**: `/:tutorId`
- **PUT**: `/patch/:petId/tutor/:tutorId`
- **PATCH**: `/pets/update/patch/:id`
- **DELETE**: `/:petId/tutor/:tutorId`

Lembre-se de substituir `:id` pela ID do tutor ou pet que você deseja acessar nas rotas que a requerem.