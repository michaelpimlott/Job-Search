exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', function(table) {
    table.increments();
    table.string('username');
    table.string('first_name');
    table.string('last_name');
    table.string('email');
  }).then(function() {
    return knex.schema.createTable('job_application', function(table) {
      table.increments();
      table.integer('user_id').unsigned().references('id').inTable('users').onDelete('cascade');
      table.string('company');
      table.string('job_title');
      table.timestamps();
    }).then(function() {
      return Promise.all([

        knex.schema.createTable('job_activity', function(table) {
          table.increments();
          table.string('type');
          table.string('description');
          table.integer('job_application_id').unsigned().references('id').inTable('job_application').onDelete('cascade');
          table.datetime('date');
        }),

        knex.schema.createTable('job_contacts', function(table) {
          table.increments();
          table.string('name');
          table.string('title');
          table.integer('phone');
          table.string('email');
          table.integer('job_application_id').unsigned().references('id').inTable('job_application').onDelete('cascade')

        })
      ])

    })

  })


};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('users'),
    knex.schema.dropTable('job_application'),
    knex.schema.dropTable('job_activity'),
    knex.schema.dropTable('job_contacts')
  ])

};
