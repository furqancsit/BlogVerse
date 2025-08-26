
import express from "express"
import { createPost, deletePost, getAllPost, updatePost } from "../controllers/blog.controller.js"
import authenticate from "../middlewares/auth.middleware.js"


const router = express.Router()

router.get("/getallpost", authenticate, getAllPost)
router.post("/createpost", authenticate,createPost)
router.put("/updatepost", authenticate, updatePost)
router.delete("/deletepost", authenticate, deletePost)


export default router