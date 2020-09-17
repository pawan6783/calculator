import React, {Component} from 'react';

class Test extends Component{
    constructor(props){
        super(props);
        this.state = {
            date : new Date(),
            day : ""
        }
       
    }

    onDateChangeHandler = (event) => {
        try{
            console.log(event.target.value);
            let getDate = new Date( event.target.value);
    
             this.setState({
                date : getDate
             });
        }
        catch(error){
            this.setState({
                day: error
            });
        }
       
        // console.log(this.state.date);
         //console.log(getDate);
    }

    onClickHandler = () => {
        
        let year = this.state.date.getFullYear();
        let month = this.state.date.getMonth();

        let lastDateOfMonth= new Date(year,month+1,0);
        let lastday = lastDateOfMonth.getDay();
       
        if(lastday===0||lastday===6){
           lastday = 5
        }
        
        //console.log(this.day);
        // console.log(month);
        // console.log(year);

        switch(lastday){
          
            case 1 : {
                this.setState({day: "Monday"});
                break;
            }
            case 2 : {
                this.setState({day: "Tuesday"});
                break;
            }
            case 3 : {
                this.setState({day: "Wednesday"});
                break;
            }
            case 4 : {
                this.setState({day: "Thursday"});
                break;
            }
            case 5 : {
                this.setState({day: "Friday"});
            }
        } 
       
       
    }

    render(){
        return(
            <div>
                <h1>Date Picker</h1>
                <div> The last working day of month = {this.state.day}</div>
                <input 
                type="date" id="text" 
                placeholder="Enter Date" 
                onChange= {this.onDateChangeHandler} ></input>

                <button id = "btn" onClick={this.onClickHandler}>Click</button>
                
            </div>
        );
    }
}
export default Test;