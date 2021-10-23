const express = require('express')
const router = express.Router()

router.get('/',(req,res)=>{
    res.render('userP3')
})

module.exports = router;