import jwt from "jsonwebtoken";
import User from '../models/user.model.js';

const protectRoute = async(req,res,next) => {
    try{
        const token = req.cookies.jwt;
        if(!token){
            return res.status(401).json({message:"You need to login"});
        }

        const decoded = jwt.verify(token,process.env.JWT_SECRET);

        if(!decoded){
            return res.status(401).json({message:"You need to login"});
        }
        const user = await User.findById(decoded.id);
        if(!user){
            return res.status(401).json({message:"User not found"});
        }
        req.user = user;
        next();
    }catch(error) {
        console.log("Error in protectRoute",error.message);
        res.status(500).json({ error:"Something went wrong"});
    }
};

export default protectRoute;