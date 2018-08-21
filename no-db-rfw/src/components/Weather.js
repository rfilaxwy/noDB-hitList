import React, {Component} from 'react';
import axios from 'axios';
import "./Weather.css";


export default class Weather extends Component{
    constructor(props){
        super(props)
        this.state = {
            londonWeather:0,
            newyorkWeather:0,
            parisWeather:0 
        }
        
    } 
    
    componentDidMount(){
      axios.get('/api/weather').then(results =>{ 
        this.setState({newyorkWeather:results.data[0],londonWeather:results.data[1],parisWeather:results.data[2]})
       }) 
    } 
    
    
    render(){
        
        return(
            <div className='weatherDisp'>
                <li><span>London, Alderaan |</span> {this.state.londonWeather} degrees</li>
                <li><span>New York, Tatooine |</span> {this.state.newyorkWeather} degrees</li>
                <li><span>Paris, Jakku |</span> {this.state.parisWeather} degrees</li>  
            </div>
        )
    }
}