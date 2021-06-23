import { Router } from "express";
import { createPost, deletePost, updatePost, readPost } from '../controllers/post.controller'
import { tokenValidation } from "../libs/validateToken"

const router: Router = Router();

router.post('/post', createPost);
router.delete('/post', deletePost);
router.patch('/post', updatePost);
router.get('/post', readPost);

export default router;