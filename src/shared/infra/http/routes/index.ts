import { Router } from 'express';

// Users
import usersRoutes from '@modules/users/infra/http/routes/users.routes';

const routes = Router();

routes.use(usersRoutes);

export default routes;
