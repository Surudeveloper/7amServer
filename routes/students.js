var express=require('express');
var router=express.Router();

// http:localgost:2020/std/get-std
router.get('/get-std', function(req,res,next){
    res.send('std-get called')
});

router.post('', function(req,res,next){
    res.send('std-post called')
});

router.delete('', function(req,res,next){
    res.send('std-dlt called')
});

module.exports=router;