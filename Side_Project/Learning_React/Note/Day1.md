# Learning React.js Day1
## Basic Hooks in React

### useState

- `useState` is a basic hook that allows developers to manage state within functional components.
- It returns a stateful value and a function to update that value.
- You can assign simple structured objects to state variables.

#### Example
```javascript
const [varName, setVarName] = useState(initialValue);
```
- In the above example, varName is the state variable that holds the current value.
- initialValue is the initial value of the state variable.
- setVarName is the function that can be used to update the value of varName.
- To access the value of varName, you can use {varName} in your JSX code.
- To update the value of varName, you can use setVarName(newValue).

### useReducer
# Learning React.js Day1
## Basic Hooks in React

### useState

- `useState` is a basic hook that allows developers to manage state within functional components.
- It returns a stateful value and a function to update that value.
- You can assign simple structured objects to state variables.

#### Example
```javascript
const [varName, setVarName] = useState(initialValue);
```
- In the above example, varName is the state variable that holds the current value.
- initialValue is the initial value of the state variable.
- setVarName is the function that can be used to update the value of varName.
- To access the value of varName, you can use {varName} in your JSX code.
- To update the value of varName, you can use setVarName(newValue).

### useReducer

- `useReducer` is another hook that is used for managing more complex state and state transitions.
- It takes in a reducer function and an initial state, and returns the current state and a dispatch function.
- The reducer function receives the current state and an action object and returns the new state.

#### Example

```javascript
const initialState = { items: [], inputs: { title: null, file: null, path: null } };
function reducer(state, action) {
  switch (action.type) {
    case 'UPDATE_ITEMS':
      return {
        ...state,
        items: action.payload
      };
    case 'UPDATE_INPUTS':
      return {
        ...state,
        inputs: action.payload
      };
    default:
      return state;
  }
}
```
-   In the above example, `initialState` is an object representing the initial state with properties `items` and `inputs`.
-   We define a `reducer` function that handles different action types and updates the state accordingly.
-   Using the `useReducer` hook, we initialize the state with `initialState` and get the current state and `dispatch` function.
-   We can then dispatch actions by calling `dispatch` with an action object containing a `type` and a `payload`.
```javascript
const [state, dispatch] = useReducer(reducer, initialState);

dispatch({ type: 'UPDATE_ITEMS', payload: ['item1', 'item2', 'item3'] });
dispatch({ type: 'UPDATE_INPUTS', payload: { title: 'Sample', file: 'sample.txt', path: '/sample' } });
```
### useMemo

- `useMemo` is a hook used for memoization and optimizing performance.
- It takes a function and an array of dependencies as arguments and returns a memoized value.
- The memoized value is only recomputed when one of the dependencies changes.

#### Example

```javascript
const memoizedValue = useMemo(() => {
  return someValue;
}, [dependency1, dependency2]);
```
-   In the above example, the function or computation inside `useMemo` will only be executed when `dependency1` or `dependency2` changes.
-   The result of the computation is stored in `memoizedValue`, which can be used in your component.
## React  Concept
 React is a component-based framework that uses JSX in a single JavaScript file, allowing developers to avoid the messiness of working with separate HTML files. Collaborative tools like Adobe XD or Figma are often used for UI design, enabling developers to work on framework and prototype components, making each component reusable, similar to completing a Lego game. Components transfer information using props, passing data from top to bottom in the component tree. This is why most declarations of Hooks constants are typically placed at the top level of each component.


