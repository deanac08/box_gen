import React, {useState} from "react";

const NewBox = (props) => {

    const [newColor, setNewColor] = useState("")

    const colorSub = (e) => {
        e.preventDefault();
        console.log('Color Submitted')
        
        const myNewBox = {
            color: newColor
        }

        props.createBox(myNewBox);
    }

    return (
        <div>
            <p>newColor: {newColor}</p>
            <form onSubmit={colorSub}>
                <input type={"text"} onChange = {e => setNewColor(e.target.value)} value={newColor}/>
                <button>Add</button>
            </form>
        </div>
    )
}

export default NewBox