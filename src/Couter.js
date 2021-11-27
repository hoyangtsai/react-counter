
import { useState } from 'react';

const reducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1};
    case 'DECREMENT':
      return { count: state.count - 1 };
    default:
      return state;
  }
}

// function reducer(state, action) {
//   switch (action.type) {
//     case 'increment':
//       return { count: state.count + 1 };
//     case 'decrement':
//       return { count: state.count - 1 };
//     default:
//       throw new Error();
//   }
// }

const Counter = () => {
  // const [state, dispatch] = useReducer(reducer, initialState);

  const [state, setState] = useState(reducer(undefined, {}));

  const dispatch = (action) => {
    setState(prevState => reducer(prevState, action));
  }

  const increment = () => {
    dispatch({ type: 'INCREMENT' });
  };

  const decrement = () => {
    dispatch({ type: 'DECREMENT' });
  };

  return (
    <div>
      <div>{state.count}</div>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
}

export default Counter;