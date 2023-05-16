const express = require('express')
const app = express()
const port = 3000

const exphbs = require('express-handlebars')

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// setting static files
app.use(express.static('public'))

app.get('/', (req, res) => {
  const link = 'Home'
  res.render('index', { links: link })
})
app.get('/:links', (req, res) => {
  const link = req.params.links[0].toUpperCase() + req.params.links.slice(1)
  res.render('index', { links: link })
})

app.listen(port, () => {
  console.log(`the express is running on http://localhost:${port}`)
})