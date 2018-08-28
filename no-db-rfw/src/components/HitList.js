import React, {Component} from 'react';
import axios from 'axios';
import './HitList.css';
import ListDisplay from './ListDisplay.js';

export default class HitList extends Component{
    constructor(props){
        super(props)

        this.state={
            hitList:[],
            termList:[],
            disList:[],
            target:'',
            newTarget:'',
            editTarget:''
           
        }
        this.handleAddTarget =this.handleAddTarget.bind(this);
        this.terminateTarget =this.terminateTarget.bind(this);
        this.handleNewTarget= this.handleNewTarget.bind(this);
        this.newTargetAdd = this.newTargetAdd.bind(this);
    }

    componentDidMount(){
        let list=[];
        axios.get('/api/theList').then(results=>{  
           list =results.data;
           this.setState({hitList:list}) 
          })
          //was setting state out here ... no good the promise went poof
      }
    
    
    
    handleAddTarget(val){
        
        this.setState({target:val})
    }
    
    terminateTarget(){
        const list = this.state.hitList;
        const tlist = this.state.termList;
        let cut = list.indexOf(this.state.target);
        list.splice(cut,1);
        this.setState({hitList:list, termList:tlist.concat(this.state.target), target:''})
        
    }

    handleNewTarget(val){
        this.setState({newTarget:val})
    }
    handleEdit(val){
        this.setState({editTarget:val})
    }
    newTargetAdd(){
        const body ={
            newTarget:this.state.newTarget
        }
        axios.post('/api/theList',body)
        .then(response=>{
            console.log(response.data)
          this.setState({hitList:response.data})       
        })    
        this.setState({newTarget:''}) 
    }
    
        


    render(){
        return(
            <div className='main'>
                
                <div className='list'>
                     <div className='hitList'>
                     <h2>Targets</h2>
                       <div>
                           <ListDisplay
                                list={this.state.hitList}
                                function={(e)=>this.handleAddTarget(e.target.innerHTML)}
                           />
                     </div>
                        <h2 onClick={this.terminateTarget}
                        >{this.state.target}</h2>
                    </div> 
                    <div><h2>Who else?</h2>
                    <button onClick={this.newTargetAdd}>Get 'em</button>
                    <input 
                    value={this.state.newTarget}
                    onChange={(e)=>this.handleNewTarget(e.target.value)}></input>
                    </div>
                    
                    <div className="deadList">
                    <h2>Terminated</h2>
                        <ListDisplay 
                            className='deadList'
                            list={this.state.termList}/>
                   
                    </div>
                </div>
            </div>
        )
    }
}