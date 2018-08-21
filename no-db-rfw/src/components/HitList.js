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
           
        }
        this.handleAddTarget =this.handleAddTarget.bind(this);
        this.terminateTarget =this.terminateTarget.bind(this);
        this.handleNewTarget= this.handleNewTarget.bind(this);
    }

    componentDidMount(){
        let list=[];
        axios.get('/api/theList').then(results=>{  
           list =results.data;
           console.log(list)
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
    newTargetAdd(){
        let {hitList}=this.state;
        hitList.push(this.state.newTarget)
        this.setState({hitList:hitList, newTarget:''})
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
                    <input onChange={(e)=>this.handleNewTarget(e.target.value)}></input>
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