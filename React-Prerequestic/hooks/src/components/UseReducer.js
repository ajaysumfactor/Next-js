//this a conjunction of useContext with useReducer of counter App
import { AppContext } from "../App";
import { useContext } from "react";




const CounterPlus = () => {
    const { state, dispatch } = useContext(AppContext);
    console.log(state);//object
    console.log(typeof(dispatch));//function
    // const increment = () => {
    //     dispatch({ type: "INCREMENT" });
    // };

    const decrement = () => {
        dispatch({ type: "DECREMENT" });
    };



    return (
        <div>
        <h1>Count: {state.count}</h1>
        <button onClick={()=>dispatch({type: "INCREMENT"})}>Increment</button>
        {/* here above arrow function is must if i will not apply arrow function here then it is run infinite loop for the increment automatically  */}
        <button onClick={decrement}>Decrement</button>
      </div>
    );
}



export default CounterPlus;



//dispatch function:--
// To update the state, you call dispatch and pass an action object as an argument. The action object typically has a type property that represents the type of action being performed and can contain additional data if necessary.