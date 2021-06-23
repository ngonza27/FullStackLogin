import {Request, Response } from "express"
import User from '../models/user'
import jwt from 'jsonwebtoken'

export const signup = async (req: Request, res: Response) => {

    const user = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    });
    user.password = await user.encrypPassword(user.password);
    const savedUser = await user.save();
    const token: string = jwt.sign({_id: savedUser._id}, process.env.TOKEN_SECRET || 'tokentest');
    res.header("Authentication", token).json({...savedUser, token});
};

export const signin = async (req: Request, res: Response) => {

    const user = await User.findOne({email: req.body.email});
    if(!user) return res.status(400).json("Email or password is wrong")
    
    const validPassword = await user.validatePassword(req.body.password)
    if(!validPassword) return res.status(400).json("Password is wrong")
    
    const token = jwt.sign({_id: user._id}, process.env.TOKEN_SECRET || 'tokentest')
    res.header("Authentication", token).json({...user, token});
};

export const profile = async (req: Request, res: Response) => {
    const user = await User.findById(req.userId, {password: 0});
    if(!user) res.status(404).json("User not found")
    res.send(user);
};


export const logout = async (req: Request, res: Response) => {
    delete req.userId
    res.json("Successfully logout");
};