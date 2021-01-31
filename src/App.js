import React from 'react';
import './App.css';
import {connect} from "react-redux";


function App(props) {

  const plusButtonHandler = (id) => {
    props.mathActionPlus(id);
    console.log(id);
  }

  const minusButtonHandler = (id) => {
    props.mathActionMinus(id);
  }

  const deleteButtonHandler = (id) => {
    props.deleteCounter(id);
  }

  return (
    <div className="App">

      {props.counters.map(el =>
          <div key={el.id}>
          <button onClick={() => minusButtonHandler(el.id)}>-1</button>&nbsp;
          {el.number}&nbsp;
          <button onClick={() => plusButtonHandler(el.id)}>+1</button>&nbsp;
            <button onClick={()=>deleteButtonHandler(el.id)}>Delete</button>
          </div>
        )}

    </div>
  );
}

const mapStateToProps = (state) => ({
  counters: state.counters,
});

const mapDispatchToProps = (dispatch) => ({
  mathActionPlus: (id) => dispatch({type: "PLUS", payload: {id: id}}),
  mathActionMinus:  (id) => dispatch({type: "MINUS", payload: {id: id}}),
  deleteCounter: (id) => dispatch({type: "DELETE_COUNTER", payload: {id: id}})
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
