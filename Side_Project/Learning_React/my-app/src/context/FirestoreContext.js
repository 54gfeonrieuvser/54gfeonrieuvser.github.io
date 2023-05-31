import { createContext, useContext, useReducer, useMemo } from "react";
import FireStore from "../handlers/firestore";
const {readDocs} = FireStore

export const Context = createContext()

const photos = []

const initialState = {
  items: photos,
  placeholders: photos,
  count: photos.length,
  inputs: { title: null, file: null, path: null },
  isCollapsed: false
};
const handleOnChange = (state, e) => {
  if (e.target.name === "file") {
   return {...state.inputs, file: e.target.files[0], path: URL.createObjectURL(e.target.files[0]) }
  } else if (e.target.name === "title") {
   return { ...state.inputs, title: e.target.value }
  }
}
function reducer(state, action) {
    switch (action.type) {
      case 'setItem':
        return {
          ...state,
          items:[state.inputs, ...state.items],
          placeholders:[state.inputs, ...state.items],
          count: state.items.length +1,
          inputs: { title: null, file: null, path: null }
        }
        case 'setItems':
        return {
          ...state,
          items:action.payload.items,
          count:action.payload.items.length,
          placeholders:action.payload.items
        }
        case 'filterItems':
          return {
            ...state,
            items: action.payload.results,
            count: action.payload.results.length
          }
      case 'setInputs':
        return {
          ...state,
          inputs: handleOnChange(state, action.payload.value)
        }
      case 'collapse':
        return {
          ...state,
          isCollapsed: action.payload.bool
        }
      default: 
      return state
    }
  }

const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    const toggle = ( bool ) => dispatch({ type:"collapse", payload:{ bool} })
    const read = async() => {
        const items = await readDocs("stocks")
        dispatch({type:"setItems", payload: { items }})
    }
    const filterItems = input => {
      if(input === "" || !!input) {
        dispatch({type: 'setItems', payload: { items: state.placeholders }})
      }
     /*  let list = state.placeholder.flat() */
      let list = Array.isArray(state.placeholders) ? state.placeholders.flat() : [];
      let results = list.filter(item => {
        const name = item.title.toLowerCase()
        const searchInput = input.toLowerCase()
        return name.indexOf(searchInput) > -1
      })

      dispatch({ type: "filterItems", payload: { results}})
    }
    const value = useMemo(() => {
      return {
        state, 
        dispatch, 
        toggle, 
        read,
        filterItems
      }
    }, [state, dispatch, toggle, read,filterItems])
    return (
        <Context.Provider value={value}>
            {children}
        </Context.Provider>
    )
}

export const useFirestoreContext = () => {
  return useContext(Context)
}
export default Provider