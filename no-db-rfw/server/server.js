const 
    express = require('express'), 
    bodyParser=require('body-parser'),
    axios=require('axios'),
    cors=require('cors'),
    app = express(),
    hl =  require('./hitlist-controller.js'), 
    wc = require('./weather-controller.js');
    require('dotenv').config();

app.use(bodyParser.json() );
app.use(cors())


//Weather 
//api.openweathermap.org/data/2.5/weather?q={city name},{country code}

app.get('/api/weather', wc.read)
app.get('/api/weather:city',wc.read)

//Swpi CRUD
//'https://swapi.co/api/people'
app.get('/api/theList',hl.read);
app.post('/api/theList',hl.create);





const port = process.env.PORT||8080;
app.listen(port, ()=>{
    console.log(`Server listening on port ${port}`);
});