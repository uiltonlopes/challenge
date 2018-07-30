const movement = (server, knex) => {

    server.get('/movement', (req, res, next) => {

        knex('movement').then((dados) => {
            res.send(dados);
        }, next)

    });

    server.post('/movement', (req, res, next) => {

        knex('movement')
            .insert(req.body).returning('*')
            .then((dados) => {
                res.send(dados);
            }, next)

    });

    server.get('/movement/:id', (req, res, next) => {

        const { id } = req.params;

        knex('movement')
            .where('id', id)
            .first()
            .then((dados) => {
                if (!dados) return res.send(new errs.BadRequestError('nada foi encontrado'))
                res.send(dados);
            }, next)

    });

    server.get('/movement/employee/:id', (req, res, next) => {

        const { id } = req.params;

        knex('movement')
            .where('employee_id', id)
            .then((dados) => {
                if (!dados) return res.send(new errs.BadRequestError('nada foi encontrado'))
                res.send(dados);
            }, next)

    });

    server.put('/movement/:id', (req, res, next) => {

        const { id } = req.params;

        knex('movement')
            .where('id', id)
            .update(req.body)
            .then((dados) => {
                if (!dados) return res.send(new errs.BadRequestError('nada foi encontrado'))
                res.send('dados atualizados');
            }, next)

    });

    server.del('/movement/:id', (req, res, next) => {

        const { id } = req.params;

        knex('movement')
            .where('id', id)
            .delete()
            .then((dados) => {
                if (!dados) return res.send(new errs.BadRequestError('nada foi encontrado'))
                res.send('dados excluidos');
            }, next)

    });

}
module.exports = movement