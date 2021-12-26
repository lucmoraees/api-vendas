import { Router } from 'express';
import users from '../controller';
import { validadeUsers } from '../../../validations';
import Upload from '../../../middlewares/Upload';

const usersRoutes = Router();

usersRoutes.get('/users/:id', validadeUsers.id, users.getUserById);

usersRoutes.get('/users', users.getList);

usersRoutes.post('/users', validadeUsers.create, users.create);

usersRoutes.put('/users', validadeUsers.update, users.updateUser);

usersRoutes.patch('/users/avatar', Upload.single('avatar'), users.updateUserAvatar);

export default usersRoutes;
 