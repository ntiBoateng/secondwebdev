const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
var Calculator = require('../helperFunctions/helper.js')
const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : true}))

router.post('/',(req,res,next)=>{
    let n1 = parseInt(req.body.num1)
    let n2 = parseInt(req.body.num2)
let cal = new Calculator(n1,n2)
var result1 = cal.sum
var result2 = cal.product
if(rd1.value.checked){
res.send('adition is '+ result1)
}else if(rd2.value.chaecked){
    res.send('product is '+ result2)
}

    //res.render('calResult')
})

module.exports = router;