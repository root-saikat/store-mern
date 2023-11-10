import express from 'express';
import brandModal from "../models/brandsModal.js";
import fetchuser from '../midleware/fetchuser.js';
import isAdmin from '../midleware/isAdmin.js';
import slugify from "slugify";
const router = express.Router();

// create brands route / require login / admin only
router.post('/create-brand', fetchuser, isAdmin, async (req, res) => {
    try {
        const { name } = req.body;
        if (!name) {
            return res.status(401).send({ message: "Name is required" });
        }
        const existingBrand = await brandModal.findOne({ name });
        if (existingBrand) {
            return res.status(200).send({
                success: true,
                message: "Brand Already Exisits",
            });
        }
        const brand = await new brandModal({
            name,
            slug: slugify(name),
        }).save();
        res.status(201).send({
            success: true,
            message: "new brand created",
            brand,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            error,
            message: "Errro in brand",
        });
    }
});


// update brand / require login / admin only
router.put('/update-brand/:id', fetchuser, isAdmin, async (req, res) => {
    try {
        const { name } = req.body;
        const { id } = req.params;
        const brand = await brandModal.findByIdAndUpdate(
            id,
            { name, slug: slugify(name) },
            { new: true }
        );
        res.status(200).send({
            success: true,
            messsage: "brand Updated Successfully",
            brand,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            error,
            message: "Error while updating brand",
        });
    }
});


// delete brand / require login / admin only
router.delete('/delete-brand/:id', fetchuser, isAdmin, async (req, res) => {
    try {
        const { id } = req.params;
        await brandModal.findByIdAndDelete(id);
        res.status(200).send({
            success: true,
            message: "brand Deleted Successfully",
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "error while deleting brand",
            error,
        });
    }
});


// fetch all brand 
router.get('/get-brand', async (req, res) => {
    try {
        const brand = await brandModal.find({});
        res.status(200).send({
            success: true,
            message: "All brands List",
            brand,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            error,
            message: "Error while getting all brands",
        });
    }
});

// fetch single brand 
router.get('/single-brand/:slug', async (req, res) => {
    try {
        const brand = await brandModal.findOne({ slug: req.params.slug });
        res.status(200).send({
            success: true,
            message: "Get SIngle brand SUccessfully",
            brand,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            error,
            message: "Error While getting Single brand",
        });
    }
});



export default router;