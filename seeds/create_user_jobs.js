
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries

  //
  // knex.schema.createTable('job_contacts', function(table) {
  //   table.increments();
  //   table.string('name');
  //   table.string('title');
  //   table.integer('phone');
  //   table.string('email');
  //   table.integer('job_application_id').unsigned().references('id').inTable('job_application').onDelete('cascade')

  return knex('users').del()
    .then(function () {
      return   knex('users').insert({
        username: 'Larry',
        first_name: 'something',
        last_name: 'somethingtoo',
        email: 'something@something.com'
      },'id').then(function(ids){
        var userId = ids[0];
        return Promise.all([
          knex('job_application').insert({
            user_id: userId,
            company: 'Apple',
            job_title: 'Boss'
          },'id').then(function(ids){
            var jobId = ids[0];
            return knex('job_activity').insert({
              type: 'Call',
              description: 'Got a callback',
              job_application_id: jobId,
              date: new Date()
            })
          }),
          knex('job_application').insert({
            user_id: userId,
            company: 'Google',
            job_title: 'CEO'
          },'id').then(function(ids){
            var jobId = ids[0];
            return knex('job_activity').insert({
              type: 'email',
              description: 'Got an email',
              job_application_id: jobId,
              date: new Date()
            })
          })
      ]);
      })

    });
};
