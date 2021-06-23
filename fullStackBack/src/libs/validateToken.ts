import { Request, Response, NextFunction } from "express"
import jwt from 'jsonwebtoken'

export const tokenValidation = (req: Request, res: Response, next: NextFunction) => {
    const token = req.header("Authorization");
    if(!token) return res.status(401).json("Access denied");

    const payload = jwt.verify(token, process.env.TOKEN_SECRET || "")
    req.userId = payload._id;
    console.log(req.userId, "asdads")
    next();
} 
