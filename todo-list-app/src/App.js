import './App.css';
import React, {useState} from 'react';

function App() {
  // State hook
  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState([]);

  // Helper functions
  function addItem(){
    if(!newItem){
      alert("Add new item");
      return;
    }
    const item = {
      id: Math.floor(Math.random() * 1000),
      value: newItem
    };

    setItems(oldList => [...oldList, item]);
    setNewItem("")
  }

  function deleteItem(id){
    const newArray = items.filter(item => item.id !== id);
    setItems(newArray);
  }

  return (
    <div className="App">
      {/* 1. header */}
       <h1>My Todo List</h1>

      {/* 2. Input {input and button} */}
       <section>
          <input type="text" className="input-value" value={newItem} placeholder="Add an todo" onChange={e => setNewItem(e.target.value)}/>
          <button onClick={() => addItem()} className="add-button">Add</button>
       </section>

      {/* 3. List of todo items */}
      <ul>
        {items.map(item =>(
          <li key={item.id}>{item.value} <button onClick={() => deleteItem(item.id)}>❌</button></li>
        ))}
      </ul>
    </div>
  );
}

export default App;
