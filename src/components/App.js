import React, { useReducer } from 'react';

import './App.css';

import TotalDisplay from './TotalDisplay';
import CalcButton from './CalcButton';
import reducer, { initialState } from '../reducers/index';
import { addOne, applyNumber, applyOperator, applyClear } from '../actions/index'

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)

  console.log('State:', state)

  // const handleAddOne = (e) => {
  //   dispatch(addOne(e.target.value))
  // }

  const handleApplyNum = (e) => {
    dispatch(applyNumber(parseInt(e.target.value)))
  }

  const handleApplyOp = (e) => {
    dispatch(applyOperator(e.target.value))
  }

  const handleClear = () => {
    dispatch(applyClear())
  }

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#"> Reducer Challenge</a>
      </nav>

      <div className="container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">

            <TotalDisplay value={state.total} />
            <div className="row details">
              <span id="operation"><b>Operation:</b> {state.operation}</span>
              <span id="memory"><b>Memory:</b> {state.memory} </span>
            </div>

            <div className="row">
              <CalcButton value={"M+"} />
              <CalcButton value={"MR"} />
              <CalcButton value={"MC"} />
            </div>

            <div className="row">
              <CalcButton value={1} onClick={handleApplyNum} />
              <CalcButton value={2} onClick={handleApplyNum} />
              <CalcButton value={3} onClick={handleApplyNum} />
            </div>

            <div className="row">
              <CalcButton value={4} onClick={handleApplyNum} />
              <CalcButton value={5} onClick={handleApplyNum} />
              <CalcButton value={6} onClick={handleApplyNum} />
            </div>

            <div className="row">
              <CalcButton value={7} onClick={handleApplyNum} />
              <CalcButton value={8} onClick={handleApplyNum} />
              <CalcButton value={9} onClick={handleApplyNum} />
            </div>

            <div className="row">
              <CalcButton value={"+"} onClick={handleApplyOp} />
              <CalcButton value={"*"} onClick={handleApplyOp} />
              <CalcButton value={"-"} onClick={handleApplyOp} />
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"} onClick={handleClear} />
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
