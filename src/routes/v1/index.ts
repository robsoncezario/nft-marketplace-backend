import express, { Router } from 'express';
import collectibleRoutes from './Collectible/index';

const v1Router: Router = express.Router();

v1Router.use('/collectible', collectibleRoutes);

export default v1Router;
