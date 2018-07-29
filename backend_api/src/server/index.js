const restify = require('restify');

const errs = require('restify-errors');

const server = restify.createServer({
    name: 'challenge',
    version: '1.0.0'
});

server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser());

const routes = require('../http/routes')

routes(server)

module.exports = server