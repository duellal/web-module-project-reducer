import React, { useReducer } from 'react';

import './App.css';

import TotalDisplay from './TotalDisplay';
import CalcButton from './CalcButton';
import { applyCreateNum, applyOperator, applyClear, applyChangeMem, applyClearMem, applyMemoryRecall, applyCalc } from '../actions/stretchActions'
import reducer, { initialState } from '../reducers/stretchReducer'

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)

  const handleCreateNum = (e) => {
    dispatch(applyCreateNum(e.target.value))
  }

  const handleApplyOp = (e) => {
    dispatch(applyOperator(e.target.value))
  }

  const handleEquals = () => {
    //Need to make handle function for equals btn when displayValue, operator, + secondNum are all in the initialState
    dispatch(applyCalc())
  }

  const handleClear = () => {
    dispatch(applyClear())
  }

  const handleChangeMem = () => {
    dispatch(applyChangeMem())
  }

  const handleClearMem = () => {
    dispatch(applyClearMem())
  }

  const handleMemRecall = (e) => {
    const num = state.memory
    dispatch(applyMemoryRecall(parseInt(num)))
  }

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#"> Reducer Challenge</a>
      </nav>

      <div className="container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">

            <TotalDisplay value={state.displayValue} />
            <div className="row details">
              <span id="operation"><b>Operation:</b> {state.operation}</span>
              <span id="memory"><b>Memory:</b> {state.memory} </span>
            </div>

            <div className="row">
              <CalcButton value={"M+"} onClick={handleChangeMem} />
              <CalcButton value={"MR"} onClick={handleMemRecall} />
              <CalcButton value={"MC"} onClick={handleClearMem} />
              <CalcButton value={"+"} onClick={handleApplyOp} />
            </div>

            <div className="row">
              <CalcButton value={1} onClick={handleCreateNum} />
              <CalcButton value={2} onClick={handleCreateNum} />
              <CalcButton value={3} onClick={handleCreateNum} />
              <CalcButton value={"-"} onClick={handleApplyOp} />
            </div>

            <div className="row">
              <CalcButton value={4} onClick={handleCreateNum} />
              <CalcButton value={5} onClick={handleCreateNum} />
              <CalcButton value={6} onClick={handleCreateNum} />
              <CalcButton value={"*"} onClick={handleApplyOp} />
            </div>

            <div className="row">
              <CalcButton value={7} onClick={handleCreateNum} />
              <CalcButton value={8} onClick={handleCreateNum} />
              <CalcButton value={9} onClick={handleCreateNum} />
              <CalcButton value={"/"} onClick={handleApplyOp} />
            </div>

            <div className="row">
              <CalcButton value={"CE"} onClick={handleClear} />
              <CalcButton value={0} onClick={handleCreateNum} />
              <CalcButton value={'.'} onClick={handleCreateNum} />
              <CalcButton value={"="} onClick={handleEquals} />

            </div>

            <div className="row ce_button">

            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
