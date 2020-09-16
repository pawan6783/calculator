import React, {Component} from 'react';

class DigitalClock extends Component{
    constructor(props){
        super(props);
        this.state = {
            time: new Date()
        }
    }

    currentTime () {
        this.setState({
            time: new Date()
        });
    }

    componentDidMount(){
        setInterval(() => this.currentTime(), 1000);
    }

    render(){
        return(
            <div>
                <center>
                
                    <h1>Digital Clock</h1>
                    
                    <div>
                    {this.state.time.toLocaleTimeString()}
                    </div>
               
                </center>
               
            </div>
        );
    }
}

export default DigitalClock;