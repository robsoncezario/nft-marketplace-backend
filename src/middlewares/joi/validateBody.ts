import joi, { ObjectSchema } from "joi";
import { Request, Response, NextFunction } from "express";

export default function (
  schema: ObjectSchema = joi.object({})
): (req: Request, res: Response, next: NextFunction) => void {
  return (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req.body);

    if (error) {
      const message = error.details.map((e) => e.message).join(", ");
      res.status(200).json({ error: message });
    } else {
      next();
    }
  };
}
