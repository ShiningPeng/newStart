import React,{useState} from 'react';
import ReactDOM from 'react-dom'
import './style.css'
import {FaceComponent} from './face'
import {MyComponent} from './demo1'

function App() {

    const [satisfactionLevel, setSatisfactionLevel] = useState(300)
    return (
        <div id="App">
            <MyComponent />
        </div>
    )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement);



// import React from 'react';
// import ReactDOM from 'react-dom';
// import  {MyComponent}  from './demo.js';

// function App() {
//     return (
//         <div className="App">
//             <MyComponent/>
//         </div>
//     )
// }

// const rootElement  = document.getElementById('root')
// ReactDOM.render(<App/>,rootElement);