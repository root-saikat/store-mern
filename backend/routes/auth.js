import express from 'express';
import User from '../models/user.js';
const router = express.Router();

import { body, validationResult } from 'express-validator';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import fetchuser from '../midleware/fetchuser.js'
import isAdmin from '../midleware/isAdmin.js'
// const JWT_SECRET = process.env.JWT_SECRET;


/// ROUTE 1: Create a User using: POST "/api/auth/createuser". No login required
router.post('/createuser', [
    body('name', 'Enter a valid name').isLength({ min: 3 }),
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password must be atleast 5 characters').isLength({ min: 5 }),
], async (req, res) => {
    let success = false;
    // If there are errors, return Bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ success, errors: errors.array() });
    }
    try {
        // Check whether the user with this email exists already
        let user = await User.findOne({ email: req.body.email });
        if (user) {
            return res.status(400).json({ success, error: "Sorry a user with this email already exists" })
        }
        const salt = await bcrypt.genSalt(10);
        const secPass = await bcrypt.hash(req.body.password, salt);

        // Create a new user
        user = await User.create({
            name: req.body.name,
            password: secPass,
            email: req.body.email,
            question: req.body.question,
        });
        const data = {
            user: {
                id: user.id,
                name: user.name
            }
        }
        const authtoken = jwt.sign(data, process.env.JWT_SECRET);

        // let success = true;
        // // res.json(user)
        // res.json({ success, authtoken })
        // console.log(json);
        // Send the response
        res.json({ success: true, authtoken, user });
        console.log(data); // Logging the data object

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})


// ROUTE 2: Authenticate a User using: POST "/api/auth/login". No login required
router.post('/login', [
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password cannot be blank').exists(),
], async (req, res) => {
    let success = false;
    // If there are errors, return Bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;
    try {
        let user = await User.findOne({ email });
        if (!user) {
            success = false
            return res.status(400).json({ error: "Please try to login with correct credentials" });
        }

        const passwordCompare = await bcrypt.compare(password, user.password);
        if (!passwordCompare) {
            success = false
            return res.status(400).json({ success, error: "Please try to login with correct credentials" });
        }

        const data = {
            user: {
                id: user.id,
                name: user.name
            }
        }
        const authtoken = jwt.sign(data, process.env.JWT_SECRET);
        success = true;
        res.json({ success, authtoken, userName: user.name })

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }


});

//forget password || POST "/api/auth/forget-password"

router.post("/forget-password", async (req, res) => {
    try {
        const { email, question, newPassword } = req.body;

        if (!email) {
            res.status(400).send({ message: "Emai is required" });
        }
        if (!question) {
            res.status(400).send({ message: "question is required" });
        }
        if (!newPassword) {
            res.status(400).send({ message: "New Password is required" });
        }

        //check
        // const user = await userModel.findOne({ email, answer });
        let success = true; // Declare the success variable and initialize it as true
        let user = await User.findOne({ email, question });
        if (!user) {
            success = false;
            return res.status(400).json({ error: "Wrong Email Or Answer" });
        }

        // newpass hassed
        const salt = await bcrypt.genSalt(10);
        const newPass = await bcrypt.hash(req.body.newPassword, salt);

        await User.findByIdAndUpdate(user._id, { password: newPass });
        res.status(200).send({
            success: true,
            message: "Password Reset Successfully",
        });


    } catch (error) {
        console.log(error);
    }
})


// get user data
// router.post('/getuser', fetchuser, async (req, res) => {

//     try {
//         userId = req.user.id;
//         const user = await User.findById(userId).select("-password")
//         res.send(user)
//     } catch (error) {
//         console.error(error.message);
//         res.status(500).send("Internal Server Error");
//     }
// })


// Admin routes
router.get("/admin", fetchuser, isAdmin, (req, res) => {
    try {
        res.send("Welcome to admin dashboard");
    } catch (error) {
        console.log(error);
        res.send({ error });
    }
});


//protected User route auth
router.get("/user-auth", (req, res) => {
    res.status(200).send({ ok: true });
});

//protected Admin route auth
router.get("/admin-auth", fetchuser, isAdmin, (req, res) => {
    res.status(200).send({ ok: true });
});

export default router;
