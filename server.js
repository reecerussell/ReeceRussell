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
    return app.render(req, res, '/projects', req.query)
  })

  server.get("/project/:id/:slug", (req, res) => {
    return app.render(req, res, "/project", {id: req.params.id, slug: req.params.slug});
  })

  server.get('*', (req, res) => {
    return handle(req, res, '/', req.query)
  })

  server.listen(port, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:' + port)
  })
})
.catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})