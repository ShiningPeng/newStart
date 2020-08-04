import React, { useState, useEffect } from 'react';
// 所有组件最后都会成为DOM节点

// export const MyComponent = props => {
//     const [userInfo, setUserInfo] = useState({
//         name: 'john',
//         lastname: 'Doe'
//     })
//     return (
//         <>
//             <h4>{userInfo.name}{userInfo.lastname}</h4>
//             <input
//                 value={userInfo.name}
//                 onChange={(e) => { setUserInfo({ ...userInfo, name: e.target.value }) }}
//             />
//             <input
//                 value={userInfo.lastname}
//                 onChange={(e) => { setUserInfo({ ...userInfo, lastname: e.target.value }) }}
//             />
//         </>
//     )
// }


// export const MyComponent = props => {
//     const [myName, setMyName] = useState('john Doe');
//     return (
//         <>
//             <h4>{myName}</h4>
//             <input
//                 type="text"
//                 value={myName}
//                 onChange={(e) => setMyName(e.target.value)}
//             />
//         </>
//     )
// }

// export const MyComponent = () => {
//     const [username, setUsername] = useState('');
//     // unmount
//     useEffect(()=>{
//         setTimeout(() => {
//             setUsername('ssssssssssss')
//         }, 1500);
//     },[])
//     return (
//         <>
//             <h4>{username}</h4>
//             <input
//                 type="text"
//                 value={username}
//                 onChange={(e) => setUsername(e.target.value)}
//             />
//         </>
//     )
// }

export const MyComponent = () => {
    const [visible, setVisible] = useState(false)
    return (
        <>
            {visible && <MyChildComponent />}
            <button
                onClick={() => { setVisible(!visible) }}>Toggle child component visible</button>
        </>
    )
}

const MyChildComponent = () => {
    const [userInfo, setUserInfo] = useState({
        name: 'jon',
        lastname: 'lisa'
    })

    useEffect(() => {
        console.log('called when mounted')
        return () => {
            console.log('called when unmount')
        }
    }, [])

    return (
        <>
            <h4>{userInfo.name}{userInfo.lastname}</h4>
            <input
                value={userInfo.name}
                onChange={(e) => { setUserInfo({ ...userInfo, name: e.target.value }) }}
            />
        </>
    )
}