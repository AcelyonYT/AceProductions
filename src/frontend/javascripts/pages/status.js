import React, { useState, useEffect } from "react"

function Status() {
    const [ data, setData ] = useState("");
    useEffect(() => {
        fetch("http://localhost:6969/working").then(
            res => res.json()
        ).then(data => {
            setData(data.message);
        })
    }, [])
    return (
        <div id="statusContent">
            <h1>Python Backend Status</h1>
            {(typeof data === "undefined") ? (
                <p>Loading...</p>
            ) : (
                <p>{data}</p>
            )}
        </div>
    )
}

export default Status;