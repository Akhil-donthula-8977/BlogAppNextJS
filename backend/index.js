const express =require("express")
var app=express()
const cors = require('cors');
require("./mongoose/mongoose")
require("./models/User")
const BlogRoutes=require("./routes/BlogRoutes")
const Blog=require("./models/Blog")
app.use(BlogRoutes)
app.use(express.json())
const corsOptions = {
    origin: '*',
    credentials: true,
    optionSuccessStatus: 200
}

app.get("/", (req, res) => {
    res.json({ data: "success" }).status(200);
});
app.listen(3500,()=>{
    console.log("running")
})