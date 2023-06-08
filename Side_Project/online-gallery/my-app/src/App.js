import { useEffect, useMemo, useContext } from "react"
import './App.css';
import Card from "./components/Card"
import List from "./components/List";
import { Context } from "./context/FirestoreContext"
import { useAuthContext } from "./context/AuthContext";
function App() {
  const { authenticate } = useAuthContext()
  const { state, read } = useContext(Context)

  /*   const [state, dispatch] = useReducer(reducer, initialState) */
  const count = useMemo(() => {
    return `You have ${state.count} image${(state.count > 1) ? "s" : ""}`
  }, [state.count])

  useEffect(() => {
    read()
    authenticate()
  }, [])
 /*  useEffect(() =>  {
   
  }, */
  return (
    <>
      <h1 className="text-center">Gallery</h1>
      {count}
      <List items = { state.items } />
    </>
  );
}
export default App;
