import React, { Component } from 'react';
import './App.css';


//Components
import GreetUser from './components/GreetUser.js';
import Weather from './components/Weather.js';
import HitList from './components/HitList.js';

class App extends Component {
 

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Weather/>
          <GreetUser />  
        </header>
       <br/>
       
       <h2>Who needs to be eliminated today?</h2>
        <div className="targets">
            <div>
              
              <HitList 
              />
            </div>
            
        </div>
      </div>
    );
  }
}

export default App;
