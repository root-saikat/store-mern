import express from 'express';
import categoryModal from "../models/categoryModal.js";
import fetchuser from '../midleware/fetchuser.js';
import isAdmin from '../midleware/isAdmin.js';
import slugify from "slugify";
const router = express.Router();


// create category route / require login / admin only
router.post('/create-category', fetchuser, isAdmin, async (req, res) => {
    try {
        const { name } = req.body;
        if (!name) {
            return res.status(401).send({ message: "Name is required" });
        }
        const existingCategory = await categoryModal.findOne({ name });
        if (existingCategory) {
            return res.status(200).send({
                success: true,
                message: "Category Already Exisits",
            });
        }
        const category = await new categoryModal({
            name,
            slug: slugify(name),
        }).save();
        res.status(201).send({
            success: true,
            message: "new category created",
            category,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            error,
            message: "Errro in Category",
        });
    }
});


// update category / require login / admin only
router.put('/update-category/:id', fetchuser, isAdmin, async (req, res) => {
    try {
        const { name } = req.body;
        const { id } = req.params;
        const category = await categoryModal.findByIdAndUpdate(
            id,
            { name, slug: slugify(name) },
            { new: true }
        );
        res.status(200).send({
            success: true,
            messsage: "Category Updated Successfully",
            category,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            error,
            message: "Error while updating category",
        });
    }
});


// delete category / require login / admin only
router.delete('/delete-category/:id', fetchuser, isAdmin, async (req, res) => {
    try {
        const { id } = req.params;
        await categoryModal.findByIdAndDelete(id);
        res.status(200).send({
            success: true,
            message: "Categry Deleted Successfully",
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "error while deleting category",
            error,
        });
    }
});


// fetch all category 
router.get('/get-category', async (req, res) => {
    try {
        const category = await categoryModal.find({});
        res.status(200).send({
            success: true,
            message: "All Categories List",
            category,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            error,
            message: "Error while getting all categories",
        });
    }
});


// fetch single category 
router.get('/single-category/:slug', async (req, res) => {
    try {
        const category = await categoryModal.findOne({ slug: req.params.slug });
        res.status(200).send({
            success: true,
            message: "Get SIngle Category SUccessfully",
            category,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            error,
            message: "Error While getting Single Category",
        });
    }
});


export default router;