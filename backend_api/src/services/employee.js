const employee = (server, knex) => {

    server.get('/employee', (req, res, next) => {

        knex('employee').then((dados) => {
            res.send(dados);
        }, next)

    });

    server.post('/employee', (req, res, next) => {

        knex('employee')
            .insert(req.body)
            .then((dados) => {
                res.send(dados);
            }, next)

    });

    server.get('/employee/:id', (req, res, next) => {

        const { id } = req.params;

        knex('employee')
            .where('id', id)
            .first()
            .then((dados) => {
                if (!dados) return res.send(new errs.BadRequestError('nada foi encontrado'))
                res.send(dados);
            }, next)

    });

    server.put('/employee/:id', (req, res, next) => {

        const { id } = req.params;

        knex('employee')
            .where('id', id)
            .update(req.body)
            .then((dados) => {
                if (!dados) return res.send(new errs.BadRequestError('nada foi encontrado'))
                res.send('dados atualizados');
            }, next)

    });

    server.del('/employee/:id', (req, res, next) => {

        const { id } = req.params;

        knex('employee')
            .where('id', id)
            .delete()
            .then((dados) => {
                if (!dados) return res.send(new errs.BadRequestError('nada foi encontrado'))
                res.send('dados excluidos');
            }, next)

    });

}
module.exports = employee