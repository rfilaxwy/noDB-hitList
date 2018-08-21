const axios =require('axios');


const weather =[];
const localWeather = 0;

const weatherIDURL = 'https://api.openweathermap.org/data/2.5/weather?id=';
const weatherApiKey = '&APPID=86553777fcbace4e2ece0cee3ef21070';
const parisWeather = `${weatherIDURL}2988507${weatherApiKey}`;
const newYorkID = `${weatherIDURL}5128581${weatherApiKey}`;
const londonID = `${weatherIDURL}2643743${weatherApiKey}`;

module.exports = {
    read:(req,res) =>{
        axios.get(`${newYorkID}`).then(results=>{
            
            weather.push((Math.floor((Number(results.data.main.temp)*(9/5))-459.67)));
            });
        axios.get(`${londonID}`).then(results=>{
            weather.push((Math.floor((Number(results.data.main.temp)*(9/5))-459.67)))
            });
        axios.get(`${parisWeather}`).then(results=>{
            weather.push((Math.floor((Number(results.data.main.temp)*(9/5))-459.67)))
            });
        res.status(200).send(weather);
    },
    create:(req,res)=>{
        const{text,time}=req.body
    }
}






