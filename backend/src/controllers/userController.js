

export const getUserProfile = async (req,res)=>{
    try {
        const user = req.user;

        if(!user){
            console.log("User not found comming from controller");
            return res.status(404).json({message: "User not found"});
            
        }
        return res.status(200).json({
            message: "User profile retrieved successfully",
            data:user
        })
    } catch (error) {
        console.log("Error occurred while fetching user profile");
        res.status(500).json({ message: 'Error occurred while fetching user profile' });
    }
}