//this a conjunction of useContext with useReducer of counter App
import { AppContext } from "../App";
import { useContext } from "react";




const CounterPlus = () => {
    const { state, dispatch } = useContext(AppContext);

    const increment = () => {
        dispatch({ type: "INCREMENT" });
    };

    const decrement = () => {
        dispatch({ type: "DECREMENT" });
    };



    return (
        <div>
        <h1>Count: {state.count}</h1>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>
    );
}



export default CounterPlus;

