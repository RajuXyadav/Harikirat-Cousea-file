
const {middleware} = require('../middleware/middleware')
const express = require('express');
const zod = require('zod');
const { User } = require('../db/schema');
const JWT_SECRET = require('../config');
const router = express.Router();
const {User} = require('../db/schema')

//signin routes

const signupSchema = zod.object({
    username:zod.string().email(),
    firstName:zod.string(),
    lastName:zod.string(),
    password:zod.string()
})

router.post('/signup',async(req,res)=>{
    const body = req.body;
    const {success} = signupSchema.safeParse(body);
    if(!success){
        return res.json({
            msg:"Email already taken/ Incorrect inputs"
        })
    }
    const user = User.findOne({
        username:body.username
    })
    if(user._id){
        return res.json({
            message:"Email already match / user already have id"
        })
    }

    const dbUser = await User.create({body})
    const token = jwt.sign({
        userId: dbUser._id
    },JWT_SECRET)

    res.json({
        message: "User created successfully",
        token:token
    })


})

const updateBody = zod.object({
    password:zod.string.optional(),
    firstName:zod.string().optional(),
    lastName:zod.string().optional(),
})

router.put('/update',middleware,async (req,res)=>{
    const {success} = updateBody.safeParse(req.body);
    if(!success){
        res.status(411).json({
            meassage: "Error while updating information"
        })
    }
    await User.updateOne(req.body,{
        id: req.userId
    })
    res.json({
        meassage:"Updated successfully"
    })
})


router.get("/bulk",async (req,res)=>{
    const filter = req.body.filter || "";
    const users = await User.find({
        $or:[{
            firstName:{
                "$regex":filter
            },
            lastName:{
                "$regex":filter
            }
                
            
        }]
    })

    res.json({
        user:users.map(user=>({
            username: user.username,
            firstName:user.firstName,
            lastName:user.lastName,
            _id: user._id
        }))
    })
})

module.exports = router