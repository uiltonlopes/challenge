# challenge
Desenvolvimento de um sistema de controle de custos.

Este repositório contem a aplicação RESTful desenvolvida com Node.js que controla as operações CRUD em um banco de dados PostgreSQL.

Módulo para manter o servidor funcionando: https://github.com/remy/nodemon

Framework para rotas REST: https://github.com/restify/node-restify

Plugin para definir mensagens de erro: https://github.com/restify/errors

Módulo ORM para PostgreSQL: https://github.com/tgriesser/knex, http://knexjs.org

Banco de dados "challenge" deve ser criado antes de iniciar a aplicação

comandos para iniciar o backend e api

npm install

knex migrate:latest

knex seed:run

npm run dev

