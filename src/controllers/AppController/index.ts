import express, { Express } from 'express';
import cors from 'cors';
import Routes from '../../routes/v1';
import Web3Root from '../../web3';

class AppController {
	public express: Express;
	public ethereum: Web3Root;

	constructor() {
		this.express = express();
		this.middlewares();
		this.ethereum = new Web3Root();
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
