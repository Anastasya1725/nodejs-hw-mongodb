import express from 'express'
import cors from 'cors'
import pino from 'pino-http'
import { getAllContactsController,getContactByIdController } from './controllers/contacts.js'

export const setupServer = () => {
  const app = express()

  app.use(cors())
  app.use(pino())
    app.use(express.json())

     app.get('/', (req, res) => {
    res.status(200).json({ message: 'Welcome to the Contacts API! Try /contacts to get all contacts.' });
  });

  app.get('/contacts', getAllContactsController)

  app.get('/contacts/:contactId', getContactByIdController)


  app.use((req, res) => {
    res.status(404).json({ message: 'Not found' })
  })

  const PORT = process.env.PORT || 3000
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
  })
}