import catchAsyncError from "../middelware/catchAsyncError.js";
import ErrorHandler from "../utils/errorHandler.js";
import { User } from "../models/userModel.js";

// All User
export const allUsers = catchAsyncError(async(req,res,next)=>{
    const users = await User.find();
    res.status(200).json({
        success:true,
        users
    })
})