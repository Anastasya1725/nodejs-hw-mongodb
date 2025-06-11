import { Contacts } from '../models/Contacts.js'

export const getAllContacts = async () => {
  return await Contacts.find()
}

export const getContactById = async (contactId) => {
  return await Contacts.findById(contactId)
}