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
router.get('/', function(req, res, next){
  JobApplication().then(function(job_applications){
    // res.render('newJob', {job_application: job_application})
    res.json(job_applications);
  })
});
router.get('/:id', function(req, res, next){
  console.log('incoming req', req.params.id)
  JobApplication().where('id', req.params.id).first().then(function(job_application){
    res.json(job_application);
  })
});
router.get('/:id')
module.exports = router;
