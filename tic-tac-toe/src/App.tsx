import { useState } from 'react';

function App() {
  const [table, setTable] = useState([
    ['null', 'null', 'null'],
    ['null', 'null', 'null'],
    ['null', 'null', 'null'],
  ]);

  const [turn, setTurn] = useState(true);
  // true - X
  // false - O

  function handleClick(x: number, y: number) {
    setTable((prevState) => {
      turn ? (prevState[x][y] = 'X') : (prevState[x][y] = 'O');
      return prevState;
    });
    setTurn(!turn);
  }

  return (
    <div className="app">
      <div className="table">
        <div className="row">
          <div className="block" onClick={() => handleClick(0, 0)}>
            {table[0][0] !== 'null' && table[0][0]}
          </div>
          <div className="block column2" onClick={() => handleClick(0, 1)}>
            {table[0][1] !== 'null' && table[0][1]}
          </div>
          <div className="block" onClick={() => handleClick(0, 2)}>
            {table[0][2] !== 'null' && table[0][2]}
          </div>
        </div>
        <div className="row middle">
          <div className="block"></div>
          <div className="block column2"></div>
          <div className="block"></div>
        </div>
        <div className="row">
          <div className="block"></div>
          <div className="block column2"></div>
          <div className="block"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
