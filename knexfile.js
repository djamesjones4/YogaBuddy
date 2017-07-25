module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/yogapp'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
}
