import express from 'express';
import { createCurrentUser, updateCurrentUser } from '../controllers/userController';
import { jwtCheck, jwtParse } from '../middlewears/auth';
import { validateMyUserRequest } from '../middlewears/validations';

const router = express.Router();

router.post('/', jwtCheck, createCurrentUser);
router.put('/', jwtCheck, jwtParse, validateMyUserRequest, updateCurrentUser)

export default router;
