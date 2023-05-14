Use Hooks useState, useReducer, useMemo to change the components's states
the useState is the basic one that allow developer asign simple structured object, while
the useReducer pass functions depend on the current state, and change its context within the action and type received.

Here is a simple one:
const [Var, AssignFunction] = useState(initial value);
when we want to access the value of Var, use {Var}, and use AssignFunction({someOtherVar}) to reassign it. 

while is more complicated:
const [state, dispatch] = useReducer(reducer,initial state);
we need to build the object state first (in the lecture:
{
  items: photos,
  count: photos.length,
  inputs: { title: null, file: null, path: null },
  isCollapsed: false
}
and declare the reducer function above
function reducer(state, action) {
  switch (action.type) {
	case 1:
	
	case 2:
	
	default:
	}
}
and call 