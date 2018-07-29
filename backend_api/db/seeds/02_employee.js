
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('employee').del()
    .then(function () {
      // Inserts seed entries
      return knex('employee').insert([
        { id: 1, name: 'Uilton', department_id: 1},
        { id: 2, name: 'Rafael', department_id: 2},
        { id: 3, name: 'Welson', department_id: 3},
      ]);
    });
};
