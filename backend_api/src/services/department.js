const department = (server, knex) => {

    server.get('/department', (req, res, next) => {

        knex('department').then((dados) => {
            res.send(dados);
        }, next)

    });

    server.post('/department', (req, res, next) => {

        knex('department')
            .insert(req.body)
            .then((dados) => {
                res.send(dados);
            }, next)

    });

    server.get('/department/:id', (req, res, next) => {

        const { id } = req.params;

        knex('department')
            .where('id', id)
            .first()
            .then((dados) => {
                if (!dados) return res.send(new errs.BadRequestError('nada foi encontrado'))
                res.send(dados);
            }, next)

    });

    server.put('/department/:id', (req, res, next) => {

        const { id } = req.params;

        knex('department')
            .where('id', id)
            .update(req.body)
            .then((dados) => {
                if (!dados) return res.send(new errs.BadRequestError('nada foi encontrado'))
                res.send('dados atualizados');
            }, next)

    });

    server.del('/department/:id', (req, res, next) => {

        const { id } = req.params;

        knex('department')
            .where('id', id)
            .delete()
            .then((dados) => {
                if (!dados) return res.send(new errs.BadRequestError('nada foi encontrado'))
                res.send('dados excluidos');
            }, next)

    });

}
module.exports = department