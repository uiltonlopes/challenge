

const server = require('./server')


server.listen(8000, function () {
  console.log('%s listening at %s', server.name, server.url);
});