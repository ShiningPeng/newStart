// import React, { useState, useEffect } from 'react';

// export const MyComponent = () => {
//     const [message, setMessage] = useState("initial message")

//     const [seconds, setSeconds] = useState(0)
//     const secondsRef = React.useRef(seconds)
//     // 闭包导致total seconds:0,,使用ref生成实体，可放dom结构或者值
//     useEffect(() => {

//         setTimeout(() => {
//             console.log(seconds)
//             setSeconds(1)
//             secondsRef.current = 1
//         }, 1000);

//         setTimeout(() => {
//             setMessage(`Total seconds:${secondsRef.current}`)
//         }, 2000);
//     }, [])
//     return (
//         <>
//             <h3>{message}</h3>
//             <h4>{seconds}</h4>
//         </>
//     )
// }




// 数据在hooks中怎么走？
// useState -> context轻量 | reducer重 | useReducer | mobx

import React, { useReducer } from 'react';

const userInfoReducer = (state, action) => {
    switch (action.type) {
        case 'setusername':
            return {
                ...state,
                name: action.payload
            }
        case 'setlastname': {
            return {
                ...state,
                lastname: action.payload
            }
        }
        default:
            return state;
    }
}

export const MyComponent = () => {
    const [reducer, dispatch] = useReducer(userInfoReducer, {
        name: "johnnnnn",
        lastname: 'lililii'
    })
    return (
        <>
            <h3>{reducer.name} {reducer.lastname}</h3>
            <EditUsername name={reducer.name} dispatch={dispatch} />
            <input value={reducer.lastname} onChange={e => dispatch({
                type: 'setlastname',
                payload: e.target.value
            })} />
        </>
    )
}

const EditUsername = React.memo(props => {
    console.log('ssssssssssssssssssssssssssssssssssssssssss')
    return (
        <input value={props.name} onChange={e => props.dispatch({
            type: 'setusername',
            payload: e.target.value
        })} />
    )
})