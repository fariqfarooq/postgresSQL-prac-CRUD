import express from 'express';
import { createUser, deleteUser, getUserById, getUsers, updateUser } from '../controllers/userController.js';

const router = express.Router();

router.post('/create-user', createUser)
router.get('/users', getUsers);
router.get('/users/:id', getUserById);
router.put('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);

export default router