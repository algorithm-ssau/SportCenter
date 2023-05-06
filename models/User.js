import mongoose from "mongoose";    
const UserSchema = new mongoose.Schema({
    fullName:{
        type : String,
        required: true,
    },
    email:{
        type : String,
        required: true,
        unique : true,
    },
    phoneNumber:{
        type : String,
        required: true,
        unique : true,
    },

},
{
    timestamps: true,
},
);

export default mongoose.model('User', UserSchema);