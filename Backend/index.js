const app = require('./app');
PORT = process.env.PORT

app.listen(PORT, () => {
    console.log(` app is running on http://localhost:${PORT}/ `)
  })