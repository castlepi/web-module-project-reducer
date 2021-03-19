import React, { useReducer } from "react";

import "./App.css";

import TotalDisplay from "./components/TotalDisplay";
import CalcButton from "./components/CalcButton";

import reducer, { initialState } from "./reducers/index";

import {
  addOne,
  applyNumber,
  changeOperation,
  clearDisplay,
  memoryAdd,
  memoryRecall,
  memoryClear,
} from "./actions/index";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { total, operation, memory } = state;
  console.log(state);

  // const handleAddClick = () => {
  //   dispatch(addOne());
  // };

  // const handleApplyClick = (num) => {
  //   dispatch(applyNumber(num));
  // };

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#">
          <img width="40px" src="./Lambda-Logo-Red.png" /> Lambda Reducer
          Challenge
        </a>
      </nav>

      <div className="container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            <TotalDisplay value={total} />
            <div className="row details">
              <span id="operation">
                <b>Operation:</b>
                {operation}
              </span>
              <span id="memory">
                <b>Memory:</b>
                {memory}
              </span>
            </div>

            <div className="row">
              <CalcButton
                value={"M+"}
                onClick={() => {
                  dispatch(memoryAdd());
                }}
              />
              <CalcButton
                value={"MR"}
                onClick={() => {
                  dispatch(memoryRecall(memory));
                }}
              />
              <CalcButton
                value={"MC"}
                onClick={() => {
                  dispatch(memoryClear());
                }}
              />
            </div>

            <div className="row">
              <CalcButton
                value={1}
                onClick={() => {
                  dispatch(applyNumber(1));
                }}
              />
              <CalcButton value={2} />
              <CalcButton value={3} />
            </div>

            <div className="row">
              <CalcButton value={4} />
              <CalcButton value={5} />
              <CalcButton value={6} />
            </div>

            <div className="row">
              <CalcButton value={7} />
              <CalcButton value={8} />
              <CalcButton value={9} />
            </div>

            <div className="row">
              <CalcButton
                value={"+"}
                onClick={() => {
                  dispatch(changeOperation("+"));
                }}
              />
              <CalcButton
                value={"*"}
                onClick={() => {
                  dispatch(changeOperation("*"));
                }}
              />
              <CalcButton
                value={"-"}
                onClick={() => {
                  dispatch(changeOperation("-"));
                }}
              />
            </div>

            <div className="row ce_button">
              <CalcButton
                value={"CE"}
                onClick={() => {
                  dispatch(clearDisplay());
                }}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
