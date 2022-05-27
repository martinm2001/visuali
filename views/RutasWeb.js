const express =require('express');
const router =express.Router();
const path=require('path')


router.get('/',(req,res)=>{

    res.render("index.ejs",{titulo:"Hol2aaa"})

})
router.get('/avisos',(req,res)=>{

    res.render("avisos.ejs")
})
router.get("mostrador.html",(req,res)=>{

    res.sendFile(path.resolve(__dirname,"mostrador.html"))
    
})

module.exports=router;