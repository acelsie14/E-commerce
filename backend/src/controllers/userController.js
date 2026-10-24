import User from '../models/User.js';

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
        res.status(500).json({ message: 'Error occurred while fetching user profile' });
    }
}

export const updateUserProfile = async (req,res)=>{
    try {
        const { name, email,phoneNumber } = req.body;
        const updatedUser = await User.findByIdAndUpdate(req.user._id, { name, email,phoneNumber}, 
            { returnDocument: 'after', runValidators: true }).select('-password');
        if (!updatedUser) {
            return res.status(404).json({ message: 'User not found' });
        }
        return res.status(200).json({
            message: "User profile updated successfully",
            data: updatedUser
        });
    } catch (error) {
        console.error('Update profile error:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

export const updateUserPassword = async (req,res)=>{
    try {
        const { currentPassword, newPassword } = req.body;
        const user = await User.findById(req.user._id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        const isMatch = await user.comparePassword(currentPassword);
        if (!isMatch) {
            return res.status(400).json({ message: 'Current password is incorrect' });
        }
        if(currentPassword === newPassword){
            return res.status(400).json({ message: 'New password cannot be the same as the current password' });
        }
        user.password = newPassword;
        await user.save();
        res.status(200).json({ message: 'Password updated successfully' });
    } catch (error) {
        console.error('Update password error:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

export const deleteUserProfile = async (req,res)=>{
    try {
        const deletedUser = await User.findByIdAndDelete(req.user._id);
        if (!deletedUser) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json({ message: 'User profile deleted successfully' });
    } catch (error) {
        console.error('Delete profile error:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}