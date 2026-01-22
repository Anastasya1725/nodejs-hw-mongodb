import Contact from "../models/contact.js";


export const getAllContacts = async () => {
  return await Contact.find();
};
  
export const getContactById = async (id) => {
  return await Contact.findById(id);
};

 export const createContact = async (data) => {
   return await Contact.create(data);
};

export const deleteContact = async (id) => {
  return await Contact.findByIdAndDelete(id);
};