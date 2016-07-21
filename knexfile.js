module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      database: 'job_app'
    }
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }

};
