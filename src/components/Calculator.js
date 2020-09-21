import React from 'react';
import '../stylesheets/Calculator.css';
import '../stylesheets/Calculator.css';

const Calculator = props => {
    return(
        <div>

                <h1 style={{textAlign: "left"}}>Calculator</h1>            
                
                <div className="wrapper">
                    
                    <div id="label" className="box1"><h1>{props.result}</h1></div>

                    <button id="clear" className="box2" onClick = {props.onClick}>clear</button>
                    <button id="%" onClick = {props.onClick}>%</button>
                    <button id="7" onClick = {props.onClick}>7</button>
                    <button id="8" onClick = {props.onClick}>8</button>
                    <button id="9" onClick = {props.onClick}>9</button>
                    <button id="-" onClick = {props.onClick}>-</button>
                    <button id="4" onClick = {props.onClick}>4</button>
                    <button id="5" onClick = {props.onClick}>5</button>
                    <button id="6" onClick = {props.onClick}>6</button>
                    <button id="+" onClick = {props.onClick}>+</button>
                    <button id="1" onClick = {props.onClick}>1</button>
                    <button id="2" onClick = {props.onClick}>2</button>
                    <button id="3" onClick = {props.onClick}>3</button>
                    <button id="=" onClick = {props.onClick}>=</button>   
            </div>
        </div>
    );
}

export default Calculator;