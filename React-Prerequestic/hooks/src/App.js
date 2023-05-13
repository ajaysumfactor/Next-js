import { createContext, useReducer } from "react";

import './App.css';
 
import Counter from './components/Counter_usestate'
import CounterPlus from "./components/UseReducer";
export const AppContext = createContext();

const reducer = (state, action) => {


console.log("state: --",state);
console.log("action:--",action);

  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    default:
      return state;
  }
};
 

//Provider context 

const AppProvider = () => {
  const [state, dispatch] = useReducer(reducer,  { count: 0 });
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {/* {children} */}
    </AppContext.Provider>
  )
}




function App() {
  return (
    <div className="App">
      <h1>hello man</h1>
      <AppProvider>
        <Counter />
        <CounterPlus/>
       </AppProvider>

    </div>
  );
}

export default App;
