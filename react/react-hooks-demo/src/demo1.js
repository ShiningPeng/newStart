import React, { useState, useEffect, memo } from 'react';


export const MyComponent = () => {
    const [filter, setFilter] = useState("")
    const [userCollection, setUserCollection] = useState([])
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/user?name_like=${filter}`)
            .then(res => res.json())
            .then(json => setUserCollection(json))
    }, [filter])
    return (
        <>
            <input value={filter} onChange={e => setFilter(e.target.value)} />
            <ul>
                {userCollection.map((user, index) => 
                (
                <li key={index}>{user.name}</li>
                ))}
            </ul>
        </>
    )
}