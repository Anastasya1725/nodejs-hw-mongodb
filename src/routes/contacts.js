import express from 'express';
import { getContactsController, getContactByIdController, } from '../controllers/contactsController.js';
import { createContactController } from "../controllers/contactsController.js";
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { deleteContactController } from "../controllers/contactsController.js";


const router = express.Router();

router.get('/', ctrlWrapper(getContactsController));
router.get('/:contactId', ctrlWrapper(getContactByIdController));
router.post('/', ctrlWrapper(createContactController));
router.delete('/:contactId', ctrlWrapper(deleteContactController));

export default router;

