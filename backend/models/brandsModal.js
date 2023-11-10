import mongoose from 'mongoose';
const { Schema } = mongoose;

const BrandSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    slug: {
        type: String,
        lowercase: true,
    },
}, { timestamps: true });

const Brand = mongoose.model("Brand", BrandSchema);

export default Brand;
