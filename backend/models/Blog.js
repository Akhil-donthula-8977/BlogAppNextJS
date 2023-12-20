const mongoose=require("mongoose")
const BlogSchema=new mongoose.Schema({
    name:{
        type:String
    },
    Content:{
        type:String
    },
    time:{
        type:String
    },
    owner:{
        type:String
    },
    likes:{
        type:Number,
        default:0,
     
    },
    shares:{
        
        type:Number,
        default:0,
        
    },
    premium:{
        default:false,
        type:Boolean
    },
    tags:{
        type:[]
    }

})

const BlogModel=mongoose.model("Blog",BlogSchema)
module.exports=BlogModel

