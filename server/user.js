const express=require('express')
const Router=express().router
Router.get('/info',function (req,res) {
    return res.json({code:1});
})
module.export=Router