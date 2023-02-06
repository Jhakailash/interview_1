const express = require('express');
const SubCategoryRouter = express.Router();
const {SubCategoryModel} = require('../model/subCategory.model');


SubCategoryRouter.post('/subCategory', async (req, res) =>{
    try {
       let {categoryId, subCategory} = req.body;
       await SubCategoryModel.create(req.body);
       res.send({msg : "Successfully Added Sub category"})
    } catch (error) {
        res.status(401).send({msg : "Somthing Went Wrong"})
    }
});


SubCategoryRouter.get("/subCategory/:categoryId", async (req, res) =>{
    try {
        let {categoryId} = req.params;
        let getData = await SubCategoryModel.find({categoryId: categoryId});
        res.send(getData);
    } catch (error) {
        res.status(401).send({msg : "Somthing Went Wrong"})
        
    }
})


module.exports = {SubCategoryRouter}