import React from "react";

function List() {
    return (
        <div id="todolist">
            <h3 className="listTitle">Content</h3>
            <ul>
                <li>more CSS</li>
                <li>profiles</li>
                <li>login</li>
                <li>announcements section</li>
                <li>Social links</li>
            </ul>
            <h3 className="listTitle">Small Projects</h3>
            <ul>
                <li>Calculator App</li>
                <li>Weather App</li>
                <li>Quiz Game</li>
            </ul>
        </div>
    );
}

export default List;