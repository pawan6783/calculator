import React from 'react';
import '../stylesheets/Calculator.css';

const Calculator = props => {
    return(
        <div>
            <center>

                <h1>Calculator</h1>
            <table >
               
                <tr  className="text">
                    <td colSpan="4"><label id="label">{props.result}</label></td>
                </tr>
                <tr>
                    <td colSpan="3"><button id="clear" onClick = {props.onClick}>clear</button></td>
                    <td><button id="%" onClick = {props.onClick}>%</button></td>
                </tr>
                <tr>
                    <td><button id="7" onClick = {props.onClick}>7</button></td>
                    <td><button id="8" onClick = {props.onClick}>8</button></td>
                    <td><button id="9" onClick = {props.onClick}>9</button></td>
                    <td><button id="-" onClick = {props.onClick}>-</button></td>

                </tr>
                <tr>
                    <td><button id="4" onClick = {props.onClick}>4</button></td>
                    <td><button id="5" onClick = {props.onClick}>5</button></td>
                    <td><button id="6" onClick = {props.onClick}>6</button></td>
                    <td><button id="+" onClick = {props.onClick}>+</button></td>

                </tr>
                <tr>
                    <td><button id="1" onClick = {props.onClick}>1</button></td>
                    <td><button id="2" onClick = {props.onClick}>2</button></td>
                    <td><button id="3" onClick = {props.onClick}>3</button></td>
                    <td><button id="=" onClick = {props.onClick}>=</button></td>

                </tr>
                
            </table>
            </center>
        </div>
    );
}

export default Calculator;