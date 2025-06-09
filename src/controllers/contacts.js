import { getAllContacts } from '../services/contacts.js'

export const getAllContactsController = async (req, res) => {
  const contact = await getAllContacts()

    if (!contact) {
    return res.status(404).json({ message: 'Contact not found' })
  }

  res.status(200).json({
    status: 200,
    message: 'Successfully found contacts!',
    data: contact,
  })
}