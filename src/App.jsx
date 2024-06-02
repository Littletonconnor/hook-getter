import { useEffect, useState } from "react";
import { createStore } from "./store";

const useStore = createStore({
  name: "Connor",
  userName: "connorlittleton",
});

let childOneRenderCount = 0;
let childTwoRenderCount = 0;

function ChildOne() {
  const state = useStore();

  useEffect(() => {
    childOneRenderCount += 1;
    console.log("CHILD ONE RENDER COUNT: ", childOneRenderCount);
  });

  function handleClick() {
    state.name = "Justin";
  }

  return (
    <div>
      <p>Current name: {state.name} </p>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

function ChildTwo() {
  const state = useStore();

  useEffect(() => {
    childTwoRenderCount += 1;
    console.log("CHILD TWO RENDER COUNT: ", childTwoRenderCount);
  });

  function handleClick() {
    state.username = "justinlittleton";
  }

  return (
    <div>
      <p>Current username: {state.username} </p>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

function App() {
  console.log("APP RENDERED");

  return (
    <div style={{ border: "1px solid black", borderRadius: 6, padding: 8 }}>
      <ChildOne />
      <ChildTwo />
    </div>
  );
}

export default App;
