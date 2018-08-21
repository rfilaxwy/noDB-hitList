const axios = require('axios');
const page = 2;
let list = [];
let newlist=[];
const swapU = 'https://swapi.co/api/people';


module.exports= {
    read:(req,res)=>{
        axios.get(`https://swapi.co/api/people`).then(results=>{
            list=[...results.data.results]
            newlist=list.map(x=>{
                return x.name
            })
            res.status(200).send(newlist)
        })  
    },
    create: (req,res)=>{
        const {name} = req.body;
        newlist.push(name)
        res.status(200).send(newlist)    },
    update:(req,res)=>{
        axios.get(`https://swapi.co/api/people?page=${page}`).then(results=>{
            list=[...list, ...results.data.results]
            res.status(200).send(list)
        }) 
    },
    delete:(req,res)=>{},
}