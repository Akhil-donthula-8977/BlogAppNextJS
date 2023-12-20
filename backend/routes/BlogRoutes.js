const express=require("express")
const Blog=require("../models/Blog")
const router=express.Router()
router.use(express.json());
router.get("/blogs",async (req,res)=>{
    try{
     const data=await Blog.find({});
     return res.send({data}).status(200);

    }catch{
  // Handle the error, e.g., log it
  console.error("Error fetching blogs:", error);
  return res.status(500).send("Internal Server Error");
    }
})

router.post("/blog",async (req,res)=>{
    try{
    const data=req.body;
    const data2=new Blog(data);
     await data2.save()
    return res.send("good").status(200)
    }
    catch{

    }
})

module.exports=router