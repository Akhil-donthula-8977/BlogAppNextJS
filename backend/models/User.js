const mongoose=require("mongoose")
const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required: true,
    },
    email:{
        type: String,
        required: [true, "Email is a required field"],
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("invalid email")
            }
        }
    },
    phoneNumber:{
        type: String,
        minLength: [10, "enter a valid number"],
        validate(value) {
            if (!validator.isMobilePhone(value)) {
                throw new Error("invalid phone number")
            }
        }
    },
    country:{
         type: String,
         max:30
    },
    interests:{
        type:[]
    },
    saved:{
        type:[]
    },
    postedBlogs:{
        type:[]
    },
    premiumUser:{
        type:Boolean
    },
    password:{
        type: String,
        min: 10
    }
},
    {
        timestamps: true,
        toJSON: { virtuals: true }
    }
)
const User=mongoose.model("users",userSchema)
module.exports=User