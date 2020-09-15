import React from 'react';
import '../stylesheets/Calculator.css';

const Calculator = props => {
    return(
        <div>
            <center>
            <table >
               
                <tr  className="text">
                    <td colSpan="4"><label id="label">{props.result}</label></td>
                </tr>
                <tr>
                    <td colSpan="3"><button id="btn-clear" on>clear</button></td>
                    <td><button id="btn-div">%</button></td>
                </tr>
                <tr>
                    <td><button id="btn-7">7</button></td>
                    <td><button id="btn-8">8</button></td>
                    <td><button id="btn-9">9</button></td>
                    <td><button id="btn-sub">-</button></td>

                </tr>
                <tr>
                    <td><button id="btn-4">4</button></td>
                    <td><button id="btn-5">5</button></td>
                    <td><button id="btn-6">6</button></td>
                    <td><button id="btn-add">+</button></td>

                </tr>
                <tr>
                    <td><button id="btn-1">1</button></td>
                    <td><button id="btn-2">2</button></td>
                    <td><button id="btn-3">3</button></td>
                    <td><button id="btn-equal">=</button></td>

                </tr>
                
            </table>
            </center>
        </div>
    );
}

export default Calculator;