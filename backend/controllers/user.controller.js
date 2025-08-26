import User from "../models/user.model.js"
import jwt from "jsonwebtoken"

const signup = async (req, res) => {

    const { fullName, email, password } = req.body

    if (!fullName && !email && !password) {
        res.status(400).json({ message: "All fields are required" })
    }

    const existedUser = await User.findOne({
        $or: [{ fullName }, { email }]
    })

    if (existedUser) {
        res.status(409).json({ message: "user & email are alerady exist pls login" })
    }

    const user = await User.create({
        fullName,
        email,
        password,
    })

    return res.status(201).json({ user, success: "User registered successfully" })
}


const login = async (req, res) => {

    const { email, password } = req.body
    if (!email && !password) {
        res.status(400).json({ error: "email & password required" })
    }


    const user = await User.findOne({ email })
    if (!user) {
        res.status(404).json({ message: "user does not exist" })

    }

    const isPasswordMatch = await user.isPasswordCorrect(password);
    if (!isPasswordMatch) {

        res.status(401).json({ message: "password not correct" })

    }

    const token = jwt.sign({
        id: user?._id
    }, process.env.JWT_SECRET || "default_secret", { expiresIn: "1h" })

    return res.status(200).json({
        message: "Successfully logged in",
        token
    });
}


const logout = async (req, res) => {

    return res.status(200).json({ message: "Successfully logged out" });

}

const profile = async (req, res) => {
    try {

        const user = await User.findById(req.user._id).select("-password")

        if (user) {

            res.status(400).json({ message: "User not Found" })

        }

        return res.status(200).json({ user, message: "profile fetched successfully" })

    } catch (error) {

        console.log({ message: "Error retrieving profile", error });

    }

}


const EditeProfile = async (req, res) => {
    const updates = req.body;
    try {

        const user =await User.findByIdAndUpdate(req.user._id,
            updates, { new: true, runValidators: true }

        ).select("-password")

        if (!user) {
            res.status(404).json({ message: "User not Found" })

        }

        res.status(200).json({ message: "profile updated, user" })

    } catch (error) {


        console.log({ message: "Error updating profile", error });

    }

}

const deleteProfile = async (req, res) => {

    try {
        const user = User.findByIdAndDelete(req.user._id)
        if (!user) {
            return res.status(404).json({ message: "User not Found" })
        }

        res.status(200).json({ meesage: "User Account deleted Successfully" })

    } catch (error) {
        res.status(500).json({ message: "Error deleting Account", error })

    }

}

export { signup, login, logout, profile, EditeProfile, deleteProfile }