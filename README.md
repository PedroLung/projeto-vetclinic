# Projeto-VetClinic

## Descrição

Este projeto é uma API simples que simula um sistema de gerenciamento para uma clínica veterinária.

No coração do nosso sistema, temos duas tabelas principais no banco de dados: `Tutores` e `Pets`. Cada tabela é acessível através de suas próprias rotas dedicadas, permitindo operações de CRUD (Criar, Ler, Atualizar e Deletar) independentes.

Com esta API, você pode:
- **Criar** novos cadastros de tutores e pets.
- **Ler** e recuperar informações existentes de tutores e pets.
- **Atualizar** informações de tutores e pets existentes.
- **Deletar** cadastros de tutores e pets quando necessário.

## Índice

- Título do Projeto
- Descrição
- Índice
- Uso

## Uso

Para testar e interagir com a API, vamos fazer uso de um aplicativo cliente HTTP, como o Postman. No Postman, irémos configurar algumas solicitações para as várias rotas da API e ver as respostas em tempo real.

Aqui estão as rotas disponíveis para a API. Todas as rotas começam com `localhost:3000`.

## Tutores

- **Início**: `/tutors`
- **GET geral**: `/tutors/view`
- **GET específico**: `/tutors/view/:id`
- **POST**: `/tutors/create`
- **PUT**: `/tutors/update/:id`
- **PATCH**: `/tutors/update/patch/:id`
- **DELETE**: `/tutors/delete/:id`

## Pets

- **Início**: `/pets`
- **GET geral**: `/pets/view`
- **POST**: `/pets/create/:id` **Id do Tutor**
- **PUT**: `/pets/update/:id` **Id do Pet**
- **PATCH**: `/pets/update/patch/:id` **Id do Pet**
- **DELETE**: `/pets/delete/:id` **Id do Pet**

Lembre-se de substituir `:id` pela ID do tutor ou pet que você deseja acessar nas rotas que a requerem.