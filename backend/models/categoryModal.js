import mongoose from 'mongoose';
const { Schema } = mongoose;

const CategorySchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    slug: {
        type: String,
        lowercase: true,
    },
}, { timestamps: true });

const Category = mongoose.model("category", CategorySchema);

export default Category;

