import { useState, useEffect, useReducer, useMemo, useContext } from "react";
import Card from "./components/Card";
import Layout from "./components/Layout";
import {Context} from "./context";
import './App.css';

function App() {
  /* const [state, dispatch] = useReducer(reducer, initialState) *///top level items/count/inputs/isCollapsed included
  const {dispatch, state} = useContext(Context);
  
  const [imgCount, setImgCount] = useState(1006);
  const [isLoading, setIsLoading] = useState(false);


  const toggle = (bool) => dispatch({ type: 'collapse', payload: { bool } });
  const handleOnChange = (e) => dispatch({ type: 'setInputs', payload: { value: e } })
  const handleOnSubmit = (e) => {
    e.preventDefault();
    // setItems([inputs.path, ...items]);
    dispatch({ type: 'setItem' })
    toggle(!state.isCollapsed);
  }
  /* const addImage = async () => {
    setIsLoading(true);
    try {
      await setImgCount(imgCount + 1);
      const img = new Image();
      img.onload = () => {
        setItems([`https://picsum.photos/id/${imgCount}/200/200`, ...items]);
        setIsLoading(false);
      };
      img.onerror = () => {
        console.error('Failed to load image');
        setIsLoading(false);
      };
      img.src = `https://picsum.photos/id/${imgCount}/200/200`;
    } catch (error) {
      console.error('Failed to fetch image', error);
      setIsLoading(false);
    }
  };

  const removeImage = async () => {
    setImgCount(imgCount - 1);
    setItems((prevItems) => {
      return prevItems.slice(1);
    });
  }; */
  const count = useMemo(() => {
    return(`You have ${state.items.length} image${state.items.length > 1 ? 's' : ''}`)
  }, [state.items])
  useEffect(() => {
    console.log(state);
    console.log(state.inputs);
  }, [state.items])


  /*  useEffect(() => {
     setItems([`https://picsum.photos/id/${imgCount}/200/200`, ...items]);
   }, [items]) */
  return (
    <>
      <Layout
      state ={state}
      onChange={handleOnChange}
      onSubmit={handleOnSubmit}
      toggle={toggle}
      >
        <h1 className="text-center">Gallery</h1>
        {count}
        <div className="row">
          {state.items.map((item, index) => <Card {...item} key={index} />)}
        </div>
      </Layout>
    </>
  );
}

export default App;
