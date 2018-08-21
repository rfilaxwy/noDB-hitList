import React, {Component} from 'react';
import './GreetUser.css';

export default class GreetUser extends Component{
    constructor(props){
        super(props)
        this.state = {
            userName:'',
            headerHide:true,
            classHide:'show',
            classShow:'hide'
        }
        this.handleUsername = this.handleUsername.bind(this);
        this.userDisp =this.userDisp.bind(this);
    }
    handleUsername(val){
        this.setState({inputName:val})
    } 
    userDisp(){
        this.setState({userName:this.state.inputName, classHide:'hide', classShow:'show'})
        //  inputHide:true  to change hide value on click
       
    }

    render(){
        
        // Want to change input and button to display hidden on click and h1 to display block on click
        // style={this.state.inputHide ? hidden:show}
        // style={show}
        return(
            <div className='greet'> 
                <input  placeholder={`Who are you?`}            
                        onChange={(e)=>this.handleUsername(e.target.value)}
                        className={this.state.classHide}
                        />
                
                <button 
                        onClick={this.userDisp}
                        className={this.state.classHide}>Press</button>
                
                <h2 className={this.state.classShow}>Welcome Bounty Hunter {this.state.userName}</h2>
                
            </div>
        )
    }
}