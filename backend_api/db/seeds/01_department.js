
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('department').del()
    .then(function () {
      // Inserts seed entries
      return knex('department').insert([
        { id: 1, name: 'Administrativo'},
        { id: 2, name: 'Comercial'},
        { id: 3, name: 'Financeiro'}
      ]);
    });
};

