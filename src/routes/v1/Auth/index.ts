import { Router } from "express";

import AuthController from "../../../controllers/AuthController";
import validateAddress from "../../../middlewares/address/validateAddress";

export default class AuthRouter {
  public router: Router;

  constructor() {
    this.router = Router();
    this.routes();
  }

  public routes(): void {
    this.router.get("/nonce", validateAddress(), AuthController.generateNonce);
  }
}
