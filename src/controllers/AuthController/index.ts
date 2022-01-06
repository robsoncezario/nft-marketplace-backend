import { Request, Response } from 'express';

import UserDoc from '../../models/User/types';
import AuthService from '../../services/AuthService';

export default class AuthController {
	static async generateNonce(req: Request, res: Response): Promise<void> {
		try {
			const user: UserDoc | null = await AuthService.updateNonce(
				req.walletAddress as string
			);

			res.status(200).json({
				message: process.env.ETHEREUM_SIGN_MESSAGE as string,
				token: user!.nonce,
			});
		} catch (e) {
			res.status(400).send({ error: 'Something failed' });
		}
	}
}
