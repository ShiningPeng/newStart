import React,{useState} from 'react';
import ReactDOM from 'react-dom'
import './style.css'
import {FaceComponent} from './face'

function App() {

    const [satisfactionLevel, setSatisfactionLevel] = useState(300)
    return (
        <div id="App">
            <input
                type="range"
                min="0"
                max="500"
                value={satisfactionLevel}
                onChange={(event)=>{
                    setSatisfactionLevel(+event.target.value)
                }}
            />
            <span>{satisfactionLevel}</span>
            <br/>

            <FaceComponent level={satisfactionLevel} />
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