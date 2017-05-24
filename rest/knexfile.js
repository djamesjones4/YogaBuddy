module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/yogapp_dev'
  },
  test: {
    client: 'pg',
    connection: 'postgres://localhost/yogapp_test'
  }
}
