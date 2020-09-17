import  React, {Component} from 'react';
import '../stylesheets/App.css';
import Calculator from '../components/Calculator';
import DigitalClock from './DigitalClock';
import Test from './Test';

class App extends Component{

  constructor(props){
    super(props);

    this.state = {
      result: ""
    }
  }

  onClickHandler = (event) => {

    let button = event.target.id;

    if(button === "="){
      this.calcualte();
    }
    else if(event.target.id === "clear"){
      this.reset();
    }

    else {
      let temp = this.state.result + button;
      this.setState({
          result: temp
      })
    }
    
    }

    calcualte = () => { 
      let check = this.state.result;

      try {
// eslint-disable-next-line
        let temp = eval(check)
        this.setState({
            result: (temp || "0" ) + " "
        })
      } 
      
      catch (e) {
        this.setState({
            result: "error"
        })

      }

    }

    reset = () =>{
      this.setState({
        result: ""
      });
    }

  render(){
    return (
      <div className="App">
        <Calculator
        result = {this.state.result}
        onClick = {(event) => this.onClickHandler(event)}
        ></Calculator>
        <div>
          <DigitalClock></DigitalClock>
        </div>
        <Test></Test>
      </div>
    )
  }
  
}

export default App;
