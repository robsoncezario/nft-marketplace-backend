import { Request, Response, NextFunction } from 'express';
import AuthService from '../../services/AuthService';

export default function (): (
	req: Request,
	res: Response,
	next: NextFunction
) => void {
	return (req: Request, res: Response, next: NextFunction) => {
		try {
			const addressHeader: string = req.headers['x-address'] as string;

			if (addressHeader) {
				if (AuthService.isValidAddress(addressHeader)) {
					req.walletAddress = addressHeader;
					next();
				} else {
					res.status(403).send('Unauthorized');
				}
			} else {
				res.status(401).send('Unauthorized');
			}
		} catch {
			res.status(403).send('Unauthorized');
		}
	};
}
