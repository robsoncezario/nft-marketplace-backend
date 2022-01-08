import express, { Router } from "express";
import CollectibleRouter from "./Collectible/index";
import AuthRouter from "./Auth/index";

export default class Routes {
  public router: Router;

  constructor() {
    this.router = Router();
    this.routes();
  }

  public routes(): void {
    this.router.use("/auth", new AuthRouter().router);
    this.router.use("/collectibles", new CollectibleRouter().router);
  }
}
