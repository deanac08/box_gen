import { useState } from 'react';
import Box from './components/Box';
import './App.css';
import NewBox from './components/NewBox';

function App() {

  const [boxes, setBoxes] = useState(
    [
      {color: "purple"},
      {color: "blue"},
      {color: "yellow"},
    ]
  )

// add new obj to boxes

const createBox = (newBoxObj) => {
  console.log("app.js createBox => ", newBoxObj)
  setBoxes([...boxes, newBoxObj])
}


  return (
    <div className="App" >
      <NewBox createBox={createBox}/>
      <hr/>
      {
        boxes.map( (box, idx)  => {
          return <Box box={box} key={idx}/>
        })
      }
    </div>
  );
}

export default App;
