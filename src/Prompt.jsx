import React from 'react'
import sentence from './Sentence.js'

export default class Prompt extends React.Component{
    constructor(){
        super()
        this.state ={
            sentence: ''
        }
    }

   
    render(){

        return(
        
            <div>
                <div id='resultDisplay'> 
                    <p id='sentence'>{this.state.sentence}</p>
                </div>
                <button type='button' id='btn' onClick={()=>{
                    this.setState({
                        sentence: sentence()
                    });

                }
                    }>
                    Generate Prompt
                </button>
            </div>
        )
    }
}