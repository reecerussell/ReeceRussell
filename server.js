const express = require('express')
const next = require('next')
    
//const dev = process.env.NODE_ENV !== 'production'
const dev = false
const port = dev ? 3000 : process.env.PORT
//const port = 3000
const app = next({ dev })
const handle = app.getRequestHandler()
    
app.prepare()
.then(() => {
  const server = express()
    
  server.get('/projects', (req, res) => {
    console.log("projects")
    return app.render(req, res, '/projects', req.query)
  })

  server.get('*', (req, res) => {
    return handle(req, res, '/', req.query)
  })

  server.listen(port, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})
.catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})