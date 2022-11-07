import React, {Component} from "react";

const initState ={
    timerOn:false,
    timerStart: 0,
    timerTime: 0
};

const startTimer=()=>{
    this.setState({
        timerOn:true,
        timerTime: this.state.timerTime,
        timerStart: Date.now() - this.state.timerTime
    });
    this.timer = setInterval(()=>{
        this.setState({
            timerTime: Date.now()- this.state.timerStart
        });
    }, 1000);
};


let stopTimer = ()=>{
    this.setState({timerOn: false});
    clearInterval(this.timer);
};

let resetTimer = ()=>{
    this.setState({
        timerStart: 0,
        timerTime: 0
    });
};


class CountDown extends Component{
    render(){
        return(
            <div className="count">
                <div className="countTimer-head">
                    <h2> CountDown Timer</h2>
                </div>
            </div>
        )
    }
    
}

export default CountDown;