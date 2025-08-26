import express from "express"
import { deleteProfile, EditeProfile, login, logout, profile, signup } from "../controllers/user.controller.js"
import authenticate from "../middlewares/auth.middleware.js"

let router = express.Router()


router.post("/signup" , signup)
router.post("/login" , login)
router.post("/logout" ,authenticate,  logout)
router.post("/profile" , authenticate,profile)
router.post("/edite-profile" ,authenticate, EditeProfile)
router.post("/delete-profile" , authenticate,deleteProfile)




export default router