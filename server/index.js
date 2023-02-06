const express = require('express')
const app = express();

const cors = require('cors')
const PORT = 8080;
const {connection} = require("./confing/Connection")
app.use(express.json())
app.use(cors())
const {CategoryRouter} = require("./route/category.route");
const {SubCategoryRouter} = require("./route/subcategory.route");


app.use("/", CategoryRouter);
app.use("/", SubCategoryRouter);




app.listen(PORT, function() {
    connection()
    console.log("Server listening on port ")
})




