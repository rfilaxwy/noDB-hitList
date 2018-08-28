const axios = require('axios');
const page = 2;
let list = [];
let newlist=[];
const swapU = 'https://swapi.co/api/people';


module.exports= {
    read:(req,res,next)=>{
        axios.get(`https://swapi.co/api/people`).then(results=>{
            list=[...results.data.results]
            newlist=list.map(x=>{
                return x.name
            })
            res.status(200).send(newlist)
        })  
    },
    create: (req,res, next)=>{   
        newlist.push(req.body.newTarget)
        res.status(200).send(newlist)   
     },
    
    delete:(req,res)=>{},
}