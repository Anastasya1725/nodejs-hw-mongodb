import {getAllContacts, getContactById } from '../services/contacts.js'


export const getAllContactsController = async (req, res) => {
  try {
    const contacts = await getAllContacts(); // Викликаємо функцію з сервісу
    res.status(200).json({
      status: 200,
      message: 'Successfully found all contacts!',
      data: contacts,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      status: 500,
      message: 'Failed to fetch contacts',
      error: error.message,
    });
  }
};


export const getContactByIdController = async (req, res) => {
  const { contactId } = req.params
  const contact = await getContactById(contactId)

  if (!contact) {
    return res.status(404).json({ message: 'Contact not found' })
  }

  res.status(200).json({
    status: 200,
    message: `Successfully found contact with id ${contactId}!`,
    data: contact,
  })
}
