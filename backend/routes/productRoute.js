import express from 'express';
import productModal from "../models/productModal.js";
import fetchuser from '../midleware/fetchuser.js';
import isAdmin from '../midleware/isAdmin.js';
import slugify from "slugify";
import formidable from "express-formidable"
import fs from "fs";
const router = express.Router();


// create product routes / login? / admin?
router.post('/create-product', fetchuser, isAdmin, formidable(), async (req, res) => {
    try {
        const { name, description, code, bigdescription, price, category, brand, quantity } =
            req.fields;
        const { photo } = req.files;
        //validation
        switch (true) {
            case !name:
                return res.status(500).send({ error: "Name is Required" });
            case !description:
                return res.status(500).send({ error: "Description is Required" });
            case !bigdescription:
                return res.status(500).send({ error: "bigdescription is Required" });
            case !code:
                return res.status(500).send({ error: "code is Required" });
            case !price:
                return res.status(500).send({ error: "Price is Required" });
            case !category:
                return res.status(500).send({ error: "Category is Required" });
            case !brand:
                return res.status(500).send({ error: "Brand is Required" });
            case !quantity:
                return res.status(500).send({ error: "Quantity is Required" });
            case photo && photo.size > 1000000:
                return res
                    .status(500)
                    .send({ error: "photo is Required and should be less then 1mb" });
        }

        const products = new productModal({ ...req.fields, slug: slugify(name) });
        if (photo) {
            products.photo.data = fs.readFileSync(photo.path);
            products.photo.contentType = photo.type;
        }
        await products.save();
        res.status(201).send({
            success: true,
            message: "Product Created Successfully",
            products,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            error,
            message: "Error in crearing product",
        });
    }
});



// get all products 
router.get('/get-product', async (req, res) => {
    try {
        const products = await productModal
            .find({})
            .populate(['brand', 'category'])
            .select("-photo")
            .limit(12)
            .sort({ createdAt: -1 });
        res.status(200).send({
            success: true,
            counTotal: products.length,
            message: "ALlProducts ",
            products,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Erorr in getting products",
            error: error.message,
        });
    }
});


// get single products 
router.get('/get-product/:slug', async (req, res) => {
    try {
        const product = await productModal
            .findOne({ slug: req.params.slug })
            .select("-photo")
            .populate(['brand', 'category']);
        res.status(200).send({
            success: true,
            message: "Single Product Fetched",
            product,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Eror while getitng single product",
            error,
        });
    }
});


// get products photo
router.get('/product-photo/:pid', async (req, res) => {
    try {
        const product = await productModal.findById(req.params.pid).select("photo");
        if (product.photo.data) {
            res.set("Content-type", product.photo.contentType);
            return res.status(200).send(product.photo.data);
        }
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Erorr while getting photo",
            error,
        });
    }
});

// delete products 
router.delete('/delete-product/:pid', async (req, res) => {
    try {
        await productModal.findByIdAndDelete(req.params.pid).select("-photo");
        res.status(200).send({
            success: true,
            message: "Product Deleted successfully",
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error while deleting product",
            error,
        });
    }
});



// update products 
router.put('/update-product/:pid', fetchuser, isAdmin, formidable(), async (req, res) => {
    try {
        const { name, description, code, bigdescription, price, category, brand, quantity, shipping } =
            req.fields;
        const { photo } = req.files;
        //alidation
        switch (true) {
            case !name:
                return res.status(500).send({ error: "Name is Required" });
            case !description:
                return res.status(500).send({ error: "Description is Required" });
            case !bigdescription:
                return res.status(500).send({ error: "bigdescription is Required" });
            case !code:
                return res.status(500).send({ error: "code is Required" });
            case !price:
                return res.status(500).send({ error: "Price is Required" });
            case !category:
                return res.status(500).send({ error: "Category is Required" });
            case !brand:
                return res.status(500).send({ error: "Brand is Required" });
            case !quantity:
                return res.status(500).send({ error: "Quantity is Required" });
            case photo && photo.size > 1000000:
                return res
                    .status(500)
                    .send({ error: "photo is Required and should be less then 1mb" });
        }

        const products = await productModal.findByIdAndUpdate(
            req.params.pid,
            { ...req.fields, slug: slugify(name) },
            { new: true }
        );
        if (photo) {
            products.photo.data = fs.readFileSync(photo.path);
            products.photo.contentType = photo.type;
        }
        await products.save();
        res.status(201).send({
            success: true,
            message: "Product Updated Successfully",
            products,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            error,
            message: "Error in Updte product",
        });
    }
});


// product by category 
router.get('/get-cat-product/:pid', async (req, res) => {
    try {
        const categoryId = req.params.pid;

        const products = await productModal
            .find({ category: categoryId })
            .populate(['brand', 'category'])
            .select("-photo")
            .limit(12)
            .sort({ createdAt: -1 });

        res.status(200).send({
            success: true,
            countTotal: products.length,
            message: "Products by Category",
            products,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error in getting products",
            error: error.message,
        });
    }
});


// filter products
router.post('/product-filter', async (req, res) => {
    try {
        const { checked, radio } = req.body;
        let args = {};
        if (checked.length > 0) args.category = checked;
        if (radio.length) args.price = { $gte: radio[0], $lte: radio[1] };
        const products = await productModal.find(args);
        res.status(200).send({
            success: true,
            products,
        });
    } catch (error) {
        console.log(error);
        res.status(400).send({
            success: false,
            message: "Error WHile Filtering Products",
            error,
        });
    }
});

export default router;