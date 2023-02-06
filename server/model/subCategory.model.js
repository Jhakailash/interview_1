const mongoose = require('mongoose')
const SubCategorySchema = mongoose.Schema({
    categoryId :{ type :  mongoose.Schema.Types.ObjectId, ref : "Category" },
    subCategory: {
        type : String,
        required : true,
    }
},{
    versionKey: false,
    timestamps : true
});

const SubCategoryModel = mongoose.model('subCategory', SubCategorySchema)
module.exports = {SubCategoryModel};