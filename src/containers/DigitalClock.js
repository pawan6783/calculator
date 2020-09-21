import React, {useState} from 'react';
import '../stylesheets/DigitalClock.css';
import Moment from 'react-moment';

const DigitalClock = props => {

    const [timeState,setTimeState] = useState({
        time: new Date().toLocaleTimeString(),
        date: new Date()
    });
    const [flagState,setFlagState] = useState({showMe: false});

    const updateTime = () => {
       
        console.log(flagState.showMe);
        setTimeState({
            time: new Date().toLocaleTimeString(),
            date: new Date().toLocaleDateString()
        });
    }

    const onChangeHandler = () => {
       console.log("inside onchangehandler");
        setFlagState({
            showMe: !flagState.showMe
        });
        
    }

    setInterval(updateTime,1000);

    return(
        <div >
            <h1 style={{textAlign: "center"}}>Digital Clock</h1>
            <div className="face">
            <label className="switch">
                <input type="checkbox" onChange = {onChangeHandler}/>
                <span className="slider round"></span>
            </label>
            <h1>{timeState.time}</h1>
            <h4>{
                 flagState.showMe?
                 <Moment format = "MMMM Do YYYY dddd">
                {timeState.date}
                </Moment> : null
                }
            </h4>

            </div>
           
        </div>
    );
}

export default DigitalClock;