import { useEffect, useState } from 'react';
import Modal from 'react-modal';

function App() {
  const [table, setTable] = useState([
    ['null', 'null', 'null'],
    ['null', 'null', 'null'],
    ['null', 'null', 'null'],
  ]);

  /**
   * [0,0] [0,1] [0,2]
   * [1,0] [1,1] [1,2]
   * [2,0] [2,1] [2,2]
   * 
   */

  const [winner, setWinner] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [turn, setTurn] = useState(true);
  // true - X (O player had the last turn)
  // false - O (X player had the last turn)

  function handleClick(x: number, y: number) {
    setTable((prevState) => {
      const newState = [...prevState]
      if(turn && newState[x][y] === 'null')
        newState[x][y] = 'X'
      else if(!turn && newState[x][y] === 'null')
        newState[x][y] = 'O'
      return newState;        
    });
    setTurn(!turn);
  }

  useEffect(() => {
    // horizontal checks
    for(let i=0; i<3; i++){
      if(table[i][0] !== 'null' && 
        table[i][0] === table[i][1] && table[i][1] === table[i][2]){
          setWinner(true);
        }
    }

    // vertical checks
    for(let i=0; i<3; i++){
      if(table[0][i] !== 'null' && 
        table[0][i] === table[1][i] && table[1][i] === table[2][i]){
          setWinner(true);
        }
    }

    // diagonal checks 
    // left to right diagonal
    if(table[0][0] !== 'null' && 
      table[0][0] === table[1][1] && table[1][1] === table[2][2]){
        setWinner(true);
    }
    // right to left diagonal 
    if(table[0][2] !== 'null' && 
      table[0][2] === table[1][1] && table[1][1] === table[2][0]){
        setWinner(true);
    }
  }, [table])

  useEffect(() =>{
    if(winner){
      setModalIsOpen(true)
    }
  }, [winner, turn]);

  const closeModal = () => {
    setModalIsOpen(false);
    // reset game
    setTable(() => {
      const newState = [
        ['null', 'null', 'null'],
        ['null', 'null', 'null'],
        ['null', 'null', 'null'],
      ]
      return newState;
    })
    setWinner(false);
  }

  return (
    <div className="app">
      <Modal className='modal' isOpen={modalIsOpen} onRequestClose={closeModal} ariaHideApp={false}>
        <p> Congratulations {turn ? "O won" : "X won"}</p>
        <button onClick={closeModal}>Replay</button>
      </Modal>
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
          <div className="block"onClick={() => handleClick(1, 0)}>
            {table[1][0] !== 'null' && table[1][0]}</div>
          <div className="block column2" onClick={() => handleClick(1, 1)}>
            {table[1][1] !== 'null' && table[1][1]}</div>
          <div className="block" onClick={() => handleClick(1, 2)}>
            {table[1][2] !== 'null' && table[1][2]}</div>
        </div>
        <div className="row">
          <div className="block" onClick={() => handleClick(2, 0)}>
            {table[2][0] !== 'null' && table[2][0]}</div>
          <div className="block column2" onClick={() => handleClick(2, 1)}>
            {table[2][1] !== 'null' && table[2][1]}</div>
          <div className="block" onClick={() => handleClick(2, 2)}>
            {table[2][2] !== 'null' && table[2][2]}</div>
        </div>
      </div>
    </div>
  );
}

export default App;
