import React, { useEffect, useState } from 'react';

const Count = () => {

    const [count, setCount] = useState(0)
    const [header, setHeader] = useState("Count: ")

    const handleClick = () => {
        setCount(count + 1)
    }

    useEffect(() => {
        console.log("Component did mount.")
    }, [])

    useEffect(() => {
        console.log("Component did update.")
    })


    return (
        <div>
            <h1>{header}</h1>
            <h2>{count}</h2>
            <button onClick={handleClick}>Add One</button>
        </div>
    )
    
}

export default Count;