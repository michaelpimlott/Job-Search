
exports.up = function(knex, Promise) {
  return Promise.all([

        knex.schema.createTable('users', function(table) {
            table.increments('uid').primary();
            table.string('username');
            table.string('password');
            table.string('name');
            table.string('email');
            table.timestamps();
        }),

        knex.schema.createTable('job_application', function(table){
           table.increments('id').primary();
           table.string('company');
           table.string('job_title');
           table.dateTime('postDate');
       }),

       knex.schema.createTable('job_activity', function(table){
          table.increments('id').primary();
          table.string('type');
          table.integer('job_application_id');
          table.dateTime('date');
      }),

      knex.schema.createTable('job_contacts', function(table){
         table.increments('id').primary();
         table.string('name');
         table.string('title');
         table.integer('phone');
         table.string('email');
         table.integer('job_application_id');

     })
   ])

};

exports.down = function(knex, Promise) {
  return Promise.all([
        knex.schema.dropTable('users'),
        knex.schema.dropTable('job_application'),
        knex.schema.dropTable('job_activity'),
        knex.schema.dropTable('job_contacts')
    ])

};
