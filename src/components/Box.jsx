import React from "react";

const Box = (props) => {
    console.log(props);
const {box} = props

    return (
        <div style={{
            backgroundColor: box.color,
            height: "100px",
            width: "100px",
            display: "inline-block"
        }}>
        {box.color}
        </div>
    )
}

export default Box;