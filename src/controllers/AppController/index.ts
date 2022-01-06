import express, { Express } from 'express';
import cors from 'cors';
import Routes from '../../routes/v1';

class AppController {
	public express: Express;

	constructor() {
		this.express = express();
		this.middlewares();
	}

	middlewares(): void {
		this.express.use(express.json());
		this.express.use(express.urlencoded({ extended: true }));
		this.express.use(cors());
		this.express.use('/images', express.static('./storage'));
		this.express.use('/api/v1', new Routes().router);
	}
}

const app: Express = new AppController().express;

export default app;
