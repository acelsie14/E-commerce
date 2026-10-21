import User from "../models/User.js";
import jwt from "jsonwebtoken";


export const registerUser = async (req, res) => {

    try{
        const{name,email,password,phoneNumber} = req.body;

    if(!name || !email || !password|| !phoneNumber){
        return res.status(400).json({message: "Please provide all required fields"});
    }

    const existingUser = await User.findOne({
            $or:[{email},{phoneNumber},]
    })

    if(existingUser){
        if(existingUser.email === email){
            return res.status(400).json({message: "Email already exists"});
        }
        if(existingUser.phoneNumber === phoneNumber){
            return res.status(400).json({message: "Phone number already exists"});
        }
    }
    const user = new User({
        name,
        email,
        password,
        phoneNumber,
    });
    await user.save();

    const token = jwt.sign({id: user._id}, process.env.JWT_SECRET, {expiresIn: '30d'});
const userData = {
    _id: user._id,
    name: user.name,
    email: user.email,
    phoneNumber: user.phoneNumber,
    role: user.role,
    isVerified: user.isVerified,
    createdAt: user.createdAt,
};
res.status(201).json({
    message: "User registered successfully",
    user: userData,
    token,
});
    }
    catch(error){
        console.error(error);
        res.status(500).json({message: "Server error"});
    }
}

export const loginUser = async (req,res)=>{
    try {
        const{identifier,password}= req.body;

        if(!identifier||!password){
            return res.status(400).json({message: "Please provide all required fields"});
        }
const user = await User.findOne({
    $or: [
        { email: identifier },
        { phoneNumber: identifier }
    ]
});
        if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
    // if (!user.isVerified) {
    //   return res
    //     .status(403)
    //     .json({ message: 'Please verify your email before logging in' });
    // }

    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
    const token = jwt.sign({id: user._id}, process.env.JWT_SECRET, {expiresIn: '30d'});
    return res.status(200).json({
      message: 'Login successful',
      token,
      user: {
    _id: user._id,
    name: user.name,
    email: user.email,
    phoneNumber: user.phoneNumber,
    role: user.role,
    isVerified: user.isVerified,
    createdAt: user.createdAt,
}
    });
    } catch (error) {
        console.error(error);
        res.status(500).json({message: "Server error"});
    }
}