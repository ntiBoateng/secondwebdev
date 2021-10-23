const express = require('express')
const router = express.Router()

router.get('/',(req,res)=>{
    res.render('userP2')
})

module.exports = router;