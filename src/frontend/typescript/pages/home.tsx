import React from "react";
import List from "../components/list/homeList";

const list = new List();

export default class Home {
    constructor() {}

    render() {
        return (
            <div id="homeContent">
                <>
                    <list.render />
                </>
            </div>
        )
    }
}