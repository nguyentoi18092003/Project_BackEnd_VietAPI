const mongoose=require("mongoose");
// ham export nay la mk tu dinj nghia de check xem ket noi da thnaf cong chua
module.exports.connect=async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL);
        console.log("Connect sucsess")
    } catch(error){
        console.log("Connect Error");
    }
}
mongoose.connect(process.env.MONGO_URL);