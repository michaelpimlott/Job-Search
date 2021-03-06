var express = require('express');
var router = express.Router();
var knex = require('../../../db/knex');



function JobApplication() {
  return knex('job_application');
}

function JobActivity() {
  return knex('job_activity');

}

function JobContacts() {
  return knex('job_contacts');
}

// /api/jobs/...
router.get('/', function(req, res, next) {
  JobApplication().where('user_id', req.user.id).then(function(job_applications) {
    res.json(job_applications);
  })
});
router.get('/:id', function(req, res, next) {
  console.log('incoming req', req.params.id)
  Promise.all([
    JobApplication().where('id', req.params.id).first(),
    JobActivity().where('job_application_id', req.params.id),
    JobContacts().where('job_application_id', req.params.id)
  ]).then(function(results) {
    var JobApplication = results[0];
    JobApplication.activities = results[1];
    JobApplication.contacts = results[2];
    res.json(JobApplication);
  })
});


router.post('/', function(req, res, next) {
  console.log(req.body);
  return JobApplication().insert({
    user_id: req.user.id,
    company: req.body.company,
    job_title: req.body.job_title,
    listing_URL: req.body.listing_URL
  }).returning('id').then(function(ids) {
    res.json({
      id: ids[0]
    });
  })

})

router.post('/:id/contact', function(req, res, next) {
  JobContacts().where('id', req.user.id).insert({
    name: req.body.name,
    title: req.body.title,
    phone: req.body.phone,
    email: req.body.email,
    job_application_id: req.params.id
  }, "id").then(function(ids) {
    res.json({
      id: ids[0]
    });
  });
});

router.post('/:id/activity', function(req, res, next) {
  console.log('hi from', req.body);
  JobActivity().where('id', req.user.id).insert({
    type: req.body.type,
    description: req.body.description,
    date: req.body.date,
    job_application_id: req.params.id
  }, "id").then(function(ids) {
    res.json({
      id: ids[0]
    });
  });
});

router.delete('/:id/delete', function(req, res, next) {
  JobApplication().where('id', req.user.id).remove({
    id: req.params.id
  }).first().del().then(function() {
    res.json({
      id: ids[0]
    });

  });
});

router.get('/logout', function(req, res, next){
  req.session = null;
  res.redirect('/');
})




module.exports = router;
