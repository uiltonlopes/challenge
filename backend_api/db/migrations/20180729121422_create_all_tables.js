
exports.up = function(knex, Promise) {
    return knex.schema.createTable('department', function (t) {
        t.increments().primary();
        t.string('name', 100).notNullable();
        t.timestamp('created_at').defaultTo(knex.fn.now());
        t.timestamp('updated_at').defaultTo(knex.fn.now());
    })
    .createTable('employee', function (t) {
        t.increments().primary();
        t.string('name', 200).notNullable();;
        t.integer('department_id').references('id').inTable('department');
        t.timestamp('created_at').defaultTo(knex.fn.now());
        t.timestamp('updated_at').defaultTo(knex.fn.now());
    })
    .createTable('movement', function (t) {
        t.increments().primary();
        t.string('description', 500).notNullable();
        t.decimal('value').notNullable();
        t.integer('employee_id').references('id').inTable('employee');
        t.timestamp('created_at').defaultTo(knex.fn.now());
        t.timestamp('updated_at').defaultTo(knex.fn.now());
    });
  
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('movement').dropTable('employee').dropTable('department');
};
