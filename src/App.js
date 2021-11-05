import React, { useState } from 'react';
import './App.css';
import { useCounter } from "./hooks/useCounter";



export const App = () => {
  const {counters, plusButtonHandler, minusButtonHandler, addButtonHandler, deleteButtonHandler } = useCounter();
  const [newNumber, setNewNumber] = useState('');

  const addNewCounter = (newNumber) => {
    addButtonHandler(newNumber);
    setNewNumber('');
  }
  const allCounters = counters.map(el =>
          <div key={el.id}>
              <button onClick={() => minusButtonHandler(el.id)}>-1</button>&nbsp;
              {el.number}&nbsp;
              <button onClick={() => plusButtonHandler(el.id)}>+1</button>&nbsp;
              <button onClick={() => deleteButtonHandler(el.id)}>Delete</button>
          </div>
      )

  return (
    <div className="App">
      <input name='number'
             type='number'
             value={newNumber}
             placeholder='Insert new number'
             onChange={(e) => setNewNumber(e.target.value)}/>
      <button onClick={() => addNewCounter(newNumber)}>Add a new counter</button>
      <hr/>
        <div>
            { allCounters}
        </div>
    </div>
  );
}
