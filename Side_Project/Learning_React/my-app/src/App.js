import { useState, useEffect, useReducer, useMemo, useContext } from "react";
import { useImmer } from "use-immer";
import Card from "./components/Card";
import Layout from "./components/Layout";
import "./App.css";
import { Context } from "./context"


function App() {
/*   const [state, dispatch] = useReducer(reducer, initialState)
  const value =  */
  const {dispatch, state} = useContext(Context)
  //const [demoState, setDemoState] = useImmer({count:0, msg:''})
  const toggle = (bool) => dispatch({ type: "collapse", payload: { bool }})
  const handleOnChange = (e) => dispatch({ type: 'setInputs', payload: { value: e}})
  const handleOnSubmit = (e) => {
    e.preventDefault()
 /*    setDemoState(draft =>{
      draft.count += 1;
      draft.msg += '*'
    })
    console.log(`${demoState.count} time had been submitted `,`${demoState.msg} is the msg `)  how to use Immer Demo*/ 
    
    dispatch({ type: 'setItem'})
    toggle(!state.isCollapsed)
  }
  const count = useMemo(() => {
    return `you have ${state.items.length} image${state.items.length > 1 ? 's': ''}`
  }, [state.items])
  return (
    <Layout
      state={state}
      onChange={handleOnChange}
      onSubmit={handleOnSubmit}
      toggle={toggle}
      >
        <h1 className="text-center">Gallery</h1>
        {count}
        <div className="row">
        {state.items.map((item, index) => <Card key={index} {...item}/>)}
        </div>
    </Layout>
  );
 
}
export default App;
