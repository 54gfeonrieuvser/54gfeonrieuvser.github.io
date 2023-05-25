import { useEffect, useMemo, useContext } from "react"
import './App.css';
import Card from "./components/Card"
import Layout from "./components/Layout"
import { Context } from "./context/context" 

function App() {
  const {state} = useContext(Context)
 
/*   const [state, dispatch] = useReducer(reducer, initialState) */
  const count = useMemo(() => {
    return `You have ${state.count} image${(state.count > 1)? "s":""}`
  }, [ state.count])
  return (
    <>
        <Layout>
        {count}
        <h1 className= "text-center">Gallery</h1>
        <div className="row">
          {state.items.map((item, index) => <Card key={index} {...item} />)
          }
        </div>
        </Layout>
    </>
  );
}
export default App;
