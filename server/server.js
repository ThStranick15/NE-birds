const express = require('express') //Node.js framework
const app = express()

const PORT = process.env.PORT || 3600

if (process.env.PORT) {
    app.use(express.static('../client/dist'))
    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, '../client/dist/index.html'))
    })
  }

app.listen(PORT,() => {
    console.log(`🚀 Express Server ready at`, PORT)
})