import { Router } from "express"
import { getContacts, createContacts, getContact, updateContact,deleteContact } from "../controllers/contactControllers.js";
import validateToken from "../middleware/validateTokenHandler.js";

const router = Router();

router.use(validateToken);
router.get('/', getContacts).post('/', createContacts)

router.get('/:id', getContact).put('/:id', updateContact).delete('/:id', deleteContact) 

export default router;