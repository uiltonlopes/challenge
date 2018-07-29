
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('movement').del()
    .then(function () {
      // Inserts seed entries
      return knex('movement').insert([
        { id: 1, description: 'Comprou um PC', value: 1000, employee_id: 1},
        { id: 2, description: 'Comprou um HD', value: 300, employee_id: 2},
        { id: 3, description: 'Comprou um Roteador', value: 100, employee_id: 3},
      ]);
    });
};
