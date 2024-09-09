const express = require('express') //Node.js framework
const app = express()
const db = require('./config/connection') //mongoose connection
const routes = require('./routes/routes')

const PORT = process.env.PORT || 3600

app.use(express.urlencoded({ extended: true })) //send url encoded data through routes
app.use(express.json()) //send json data through routes
app.use('/api', routes)

if (process.env.PORT) {
    app.use(express.static('../client/dist'))
    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, '../client/dist/index.html'))
    })
  }

app.listen(PORT,() => {
    console.log(`🚀 Express Server ready at`, PORT)
})