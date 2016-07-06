var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

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
  return knex('job_contacs');
}

router.get('/newJob', function(req, res, next){
  JobApplication().select()then(function(job_application){
    res.render('newJob', {job_application: job_application})
  })
});
