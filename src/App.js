import {useState} from 'react';
// function Square({ value }) {
function Square() {
  const [value, setValue] = useState(null);

  function handleClick() {
    setValue('X');
    console.log('clicked!');
  }

  return (
    <button
      className="square"
      onClick={handleClick}
    >
      {value}
    </button>
  );
}
export default function Board() {
  return ( 
    <>
      <div className="board-row">
        {/* first styles */}
        {/* <button className="square">1</button>
        <button className="square">2</button>
        <button className="square">3</button> */}
        {/* second styles */}
        {/* <Square value="1"/>
        <Square value = "2" />
        <Square value= "3"/> */}
        {/* third styles */}
        <Square />
        <Square  />
        <Square />
      </div>
      <div className="board-row">
      <Square  />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square   />
        <Square />
        <Square />
      </div>
    </>
  );
}
