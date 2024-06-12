import React, { useState, useEffect } from "react"

export default class Status {
    constructor() {}

    render() {
        const [ data, setData ] = useState("");
        const [ data1, setData1 ] = useState("");

        useEffect(() => {
            Status.getStatus("http://localhost:6969/working", "python", setData);
        }, []);
        useEffect(() => {
            Status.getStatus("http://localhost:8080/working", "java", setData1);
        }, []);

        return (
            <div id="statusContent">
                <h1>Python Backend Status</h1>
                { ( typeof data === "undefined" ) ? (
                    <p>Loading...</p>
                ) : (
                    <p>{data}</p>
                ) }
                <h1>Java Backend Status</h1>
                { ( typeof data1 === "undefined" ) ? (
                    <p>Loading...</p>
                ) : (
                    <p>{data1}</p>
                ) }
            </div>
        )
    }

    static getStatus(url: string | URL | Request, type: String, getData: React.Dispatch<React.SetStateAction<string>>){
        fetch(url).catch(() => {
            console.log(`Cannot get ${type} backend`)
        }).then(
            res => res === undefined ? console.log("Cannot conver to JSON") : res.json()
        ).then(data => {
            data === undefined ? console.log("Cannot get data") : getData(data.response);
        });
    }
}