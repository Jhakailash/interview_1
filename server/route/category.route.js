const express = require('express');
const CategoryRouter = express.Router();
const {CategoryModel} = require('../model/category.model');


CategoryRouter.post('/category', async (req, res) =>{
    try {
       let {category} = req.body;
       await CategoryModel.create({category: category});
       res.send({msg : "Successfully Added category"})
    } catch (error) {
        res.send({msg : "Somthing Went Wrong"})
    }
})


CategoryRouter.get('/category', async (req, res) =>{
    try {
      let categoryData =  await CategoryModel.find();
       res.send(categoryData)
    } catch (error) {
        res.send({msg : "Somthing Went Wrong"})
    }
})


module.exports = {CategoryRouter}