const express = require("express");
const router = express.Router();

router.get('/', (req,res)=>{
    res.send('Server IS Running');
})

module.exports = router;