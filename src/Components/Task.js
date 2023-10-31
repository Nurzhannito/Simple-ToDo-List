import React, { useState } from "react";

const Task = (props) => {

    const [x, setX] = useState(false);

    return (
        <div className="item-todo">
            <h3 className="item-title">{props.title}</h3>
            <div className="item-action">
                <input className="item-input" type="checkbox" checked={x} onChange={() => setX(!x)} />
                <img className="item-icon" onClick={props.delete} src={props.image} alt="icon" />
            </div>
        </div>
    )
}

export default Task