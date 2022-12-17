import React from "react";
import "../../css/pages/home.css";
import List from "../components/list/homeList";

function Home() {
    return (
        <div id="homeContent">
            <div id="contentBox">
                <>
                    <List />
                </>
            </div>
        </div>
    );
}
export default Home;