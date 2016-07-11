
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
return knex.raw('ALTER SEQUENCE users_id_seq restart;').then(function () {
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
          job_title: 'Boss',
          listing_URL:'http://stackoverflow.com/jobs/72146/javascript-developer-front-end-web-chefsteps-inc?searchTerm=javascript%20developer&offset=9&location=seattle&range=20'
        },'id').then(function(ids){
          var jobId = ids[0];
          return knex('job_activity').insert({
            type: 'Call',
            description: 'Got a callback',
            job_application_id: jobId,
            date: new Date()
          }).then(function(ids){
            var jobId = ids[0];
            return knex('job_contacts').insert({
              name: 'Roberto Clemons',
              title: 'Public Relations Manager',
              phone: '9725478',
              email: 'rclemons@aol.com',
            })
          })
        }),
        knex('job_application').insert({
          user_id: userId,
          company: 'Google',
          job_title: 'CEO',
          listing_URL:'http://stackoverflow.com/jobs/119600/front-end-developer-sportsrocket-inc?searchTerm=javascript%20developer&offset=2&location=seattle&range=20'
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

})

};
