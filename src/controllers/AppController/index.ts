import express, { Express } from 'express';
import cors from 'cors';
import v1Router from '../../routes/v1';

class AppController {
	public express: Express;

	constructor() {
		this.express = express();
		this.middlewares();
	}

	middlewares() {
		this.express.use(express.json());
		this.express.use(cors());
		this.express.use('/api/v1', v1Router);
	}
}

const app: Express = new AppController().express;

export default app;
