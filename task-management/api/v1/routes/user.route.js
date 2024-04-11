const express=require("express");
const router =express.Router();

const controller=require("../controllers/user.controller");
router.post("/register",controller.register);
router.post("/login",controller.login);
router.get("/detail/:id",controller.detail);
module.exports=router;
// chua xong ms ket thuc Trang thong tin ca nhan, Chua lam 04 Chuyen thanh cac route