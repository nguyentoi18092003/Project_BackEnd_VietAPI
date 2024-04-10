const Task=require("../models/task.model");
//[GET]/api/v1/tasks
module.exports.index= async(req,res)=>{
    try{
    const tasks=await Task.find({
        deleted:false
    })
    res.json(tasks)
}
catch(error){
    console.log(error)
}
}
//[GET]/api/v1/tasks/detail/:id
module.exports.detail=async(req,res)=>{
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
}