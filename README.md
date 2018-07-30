# Aplicação RESTful com Node.js e Angular

Desenvolvimento de um sistema de controle de custos.

Este repositório contem a aplicação RESTful desenvolvida com Node.js que controla as operações CRUD em um banco de dados PostgreSQL e o frontend feito em Angular .

Módulo para manter o servidor funcionando: https://github.com/remy/nodemon

Framework para rotas REST: https://github.com/restify/node-restify

Plugin para definir mensagens de erro: https://github.com/restify/errors

Plugin para validação de requisições: https://github.com/Tabcorp/restify-cors-middleware

Módulo ORM para PostgreSQL: https://github.com/tgriesser/knex, http://knexjs.org

## Backend e API

Para testar a aplicação, você deve ter o PostgreSQL instalado, com a estrutura de banco de dados "challenge" já criado.

Navegue ate a pasta challenge/backend_api e use os seguintes comandos para iniciar o backend e api.

```
npm install
```
```
knex migrate:latest
```
```
knex seed:run
```
```
npm run dev
```

## Frontend Angular

Para testar a aplicação, você deve ter o @angular/cli instalado

Navegue ate a pasta challenge/frontend e use os seguintes comandos para iniciar o frontend.
```
npm install
```
```
ng serve
```