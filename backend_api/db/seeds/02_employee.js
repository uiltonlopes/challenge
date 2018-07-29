
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('employee').del()
    .then(function () {
      // Inserts seed entries
      return knex('employee').insert([
        { name: 'Uilton', department_id: 1},
        { name: 'Rafael', department_id: 2},
        { name: 'Welson', department_id: 3},
      ]);
    });
};
