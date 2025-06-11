import { Contacts } from '../models/Contacts.js'

export const getAllContacts = async () => {
  const contacts = await Contacts.find();
   return contacts;
}

export const getContactById = async (contactId) => {
   const contact = Contacts.findById(contactId);
   return contact;
}