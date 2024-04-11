const md5=require("md5");
const User=require("../models/user.model");
const generate=require("../../../helpers/generate");
//[POST]/api/v1/users/register
module.exports.register=async(req,res)=>{
    const exitsEmail=await User.findOne({
        email:req.body.email,
        deleted:false
    });
    if(exitsEmail){
        res.json({
            code:400,
            message:"Email đã tồn tại!"
        });
        return ;
    }
    const infoUser={
        fullName:req.body.fullName,
        email:req.body.email,
        password:md5(req.body.password),
        token:generate.generateRandomString(30)
    };
    const user=new User(infoUser);
    await user.save();

    console.log(user)
    const token=user.token;
    res.cookie("token",token);
    res.json({
        code:200,
        message:"Tạo tài khoản thành công!",
        token:token
    });
};