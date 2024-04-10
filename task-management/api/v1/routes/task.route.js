const express=require("express");
const router=express.Router();
// khi vao duong dan nay no se tra ve 1 danh sach data ma chung ta do ve
const Task=require("../../../models/task.model");
router.get("/", async(req,res)=>{
    // res.send("Danh sach cong viec");
    try{
    const tasks=await Task.find({
        deleted:false
    })//.select("title status timeStart timeFinish");
    
    // select o day la lay ra truong gi
    //neu muon lay tat ca thi bo .select...đi
    // console.log(tasks)
    res.json(tasks)
    // tra ve 1 cai link json
}
catch(error){
    console.log(error)
}

});
router.get("/detail/:id",async(req,res)=>{
    try{
        const id=req.params.id;
        // console.log(id)
        const task= await Task.findOne({
            _id: id,
            deleted: false
        });
        res.json(task);
    }
    catch(error){
        console.log(error)
    }
});

module.exports=router;
