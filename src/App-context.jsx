import { useEffect, createContext, useContext, useState } from "react";

const initialState = {
  name: "Connor",
  username: "connorlittleton",
};

const StoreContext = createContext(initialState);

let childOneRenderCount = 0;
let childTwoRenderCount = 0;

function ChildOne() {
  const { state, setState } = useContext(StoreContext);

  useEffect(() => {
    childOneRenderCount += 1;
    console.log("CHILD ONE RENDER COUNT: ", childOneRenderCount);
  });

  function handleClick() {
    setState({ ...state, name: "Justin" });
  }

  return (
    <div>
      <p>Current name: {state.name} </p>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

function ChildTwo() {
  const { state, setState } = useContext(StoreContext);

  useEffect(() => {
    childTwoRenderCount += 1;
    console.log("CHILD TWO RENDER COUNT: ", childTwoRenderCount);
  });

  function handleClick() {
    setState({ ...state, username: "justinlittleton" });
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
  const [state, setState] = useState(initialState);

  return (
    <StoreContext.Provider value={{ state, setState }}>
      <div style={{ border: "1px solid black", borderRadius: 6, padding: 8 }}>
        <ChildOne />
        <ChildTwo />
      </div>
    </StoreContext.Provider>
  );
}

export default App;
