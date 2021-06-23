import {Request, Response } from "express"
import Post from '../models/post'

export const createPost = async (req: Request, res: Response) => {
    const post = new Post({
        id: req.body.id,
        postContent: req.body.content
    });
    const newPost = await post.save();
    res.json(newPost);
};

export const deletePost = async (req: Request, res: Response) => {
    const deletedPost = await Post.deleteOne({id: req.body.id});
    if(!deletedPost) return res.status(404).json('Post not found')
    res.json(deletedPost);
};

export const updatePost = async (req: Request, res: Response) => {
    const updatedPost = await Post.findOneAndUpdate({id: req.body.id}, {postContent: req.body.postContent});
    if(!updatedPost) return res.status(404).json('Post not found')
    res.json(updatedPost);
};

export const readPost = async (req: Request, res: Response) => {
    const readPost = await Post.findOne({id: req.body.id});
    if(!readPost) return res.status(404).json('Post not found')
    res.json(readPost);
};