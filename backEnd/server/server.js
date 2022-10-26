const express = require('express');
const config = require('../config/config');
const users = require('../users/users');


const app = express()
app.use(express.urlencoded({expended : false}))

app.get('/',(req,res) => {
    res.status(200).json({
        data:users,
        success:true
    })
})

app.get('/:id',(req,res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if(!user) return res.status(404).json({
        data:null,
        success:false
    })
    res.status(200).json({
        data:user,
        success:true
    })
})

app.post('/',(req,res) => {
    console.log(req.body)
    req.body.id = parseInt(req.body.id);
    users.push(req.body);
    res.json({
        data:'user added successfully',
        success:true
    })
})
app.listen(config.port , () => console.log(`server is runing on port ${config.port}`)) 