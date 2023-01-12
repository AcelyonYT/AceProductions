import React, { useState, useEffect } from "react"

function Status() {
    const [ data, setData ] = useState("");
    const [ data1, setData1 ] = useState("");
    useEffect(() => {
        getStatus("http://localhost:6969/working", "python", setData);
    }, []);
    useEffect(() => {
        getStatus("http://localhost:8080/working", "java", setData1);
    }, []);
    return (
        <div id="statusContent">
            <h1>Python Backend Status</h1>
            {(typeof data === "undefined") ? (
                <p>Loading...</p>
            ) : (
                <p>{data}</p>
            )}
            <h1>Java Backend Status</h1>
            {(typeof data1 === "undefined") ? (
                <p>Loading...</p>
            ) : (
                <p>{data1}</p>
            )}
        </div>
    )
}

function getStatus(url, type, getData){
    fetch(url).catch(() => {
        console.log(`Cannot get ${type} backend`)
    }).then(
        res => res === undefined ? console.log("Cannot conver to JSON") : res.json()
    ).then(data => {
        data === undefined ? getData(undefined) : getData(data.response);
    })
}

export default Status;