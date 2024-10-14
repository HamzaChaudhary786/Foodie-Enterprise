import express from 'express';
import { createCurrentUser, updateCurrentUser ,getCurrentUser } from '../controllers/userController';
import { jwtCheck, jwtParse } from '../middlewears/auth';
import { validateMyUserRequest } from '../middlewears/validations';

const router = express.Router();

router.post('/', jwtCheck, createCurrentUser);
router.put('/', jwtCheck, jwtParse, validateMyUserRequest, updateCurrentUser)
router.get('/', jwtCheck, jwtParse, getCurrentUser)


export default router;
