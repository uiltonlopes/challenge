
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('department').del()
    .then(function () {
      // Inserts seed entries
      return knex('department').insert([
        { name: 'Administrativo'},
        { name: 'Comercial'},
        { name: 'Financeiro'}
      ]);
    });
};

