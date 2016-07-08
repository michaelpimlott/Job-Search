var express = require('express');
var router = express.Router();
var knex = require('../../../db/knex');

function Users() {
  return knex('users');
}

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
  JobApplication().then(function(job_applications) {
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
//post :id/activity

router.post('/', function(req, res, next) {
  return JobApplication().insert({
      user_id: 1,
      //when auth is added change to current user (logged in)
      company: req.body.company,
      job_title: req.body.job_title,
      // listing_URL: req.body.listing_URL
    }).returning('id').then(function(ids) {
      res.json({id:ids[0]});
    })
    //insert into job app table returning the id of the job that was insertd
    //then(function(){res.json id: inserted id [])
})

module.exports = router;
