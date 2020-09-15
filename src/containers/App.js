import  React, {Component} from 'react';
import '../stylesheets/App.css';
import Calculator from '../components/Calculator';

class App extends Component{

  constructor(props){
    super(props);

    this.state = {
      result: 0
    }
  }
  render(){
    return (
      <div className="App">
        <Calculator
        result = {this.state.result}
        ></Calculator>
      </div>
    );
  }
  
}

export default App;
