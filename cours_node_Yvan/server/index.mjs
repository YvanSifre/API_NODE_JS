import express from 'express'
import morgan from 'morgan'
import bodyParser from 'body-parser'
import router from './routes.mjs'
import swaggerUI from 'swagger-ui-express'
import docs from './docs/index.mjs'
import env from 'dotenv'

// APP
const app = express()
env.config()
const port = process.env.PORT

// MIDDLEWARES
app.use(morgan('tiny'))
app.use(bodyParser.json())
app.use(router)

// MAIN SERVER
app.listen(port, () => {
  console.log('\x1b[36m%s\x1b[0m', `\nListening at http://localhost:${port}`)
})

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(docs))
