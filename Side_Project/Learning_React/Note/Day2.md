# Learning React.js Day 2

## Basic Hooks in React

### useEffect

- `useEffect` is a special hook used to handle side effects and interactions in functional components.
- It allows you to perform tasks such as data fetching, subscriptions, or manually changing the DOM after the component has rendered.
- The first argument of `useEffect` is a function that will be called after the component has rendered and any time the dependencies specified in the second argument change.
- The second argument is an optional dependencies array that determines when the effect should be re-run. If the array is empty, the effect runs only once (similar to `componentDidMount` in class components).
-   If the second argument is not specified, it can lead to an infinite loop as the effect will run after every render.
#### Example

```javascript
useEffect(() => {
  // This function will be called after every render and when dependencies change
}, [dependency1, dependency2]);
```
### useContext

- The `useContext` hook allows React developers to follow the "single source of truth" principle and avoid props drilling.
- It consists of two parts: the context provider and the context consumer.
- In a scenario where props drilling occurs, passing props through multiple components can become cumbersome and error-prone. To mitigate this issue, the `useContext` hook can be used.

### Context Provider

- The context provider is a component that wraps around a group of components and provides them with a specific context value.
- It uses the `<Context.Provider>` component with a `value` prop to pass the context value to its children.
- By using the context provider, you establish a shared context that can be accessed by nested components.

### Context Consumer

- The context consumer is a component that accesses the context value provided by the context provider.
- It uses the `useContext` hook to access the context value at the desired layer in the component tree.
- By using `useContext`, you can directly access the context value without passing it through intermediate components.

#### Example


### Step 1: createContext
To create a context object, use the `createContext()` function:
```jsx
// Create the context object
const MyContext = createContext();
```
#### Step 2: Context.Provider
To provide the context value to components, use the context provider:
```jsx
<MyContext.Provider value={props}>
  {Children}
</MyContext.Provider>
```
#### Step 3: Context.Consumer
To access the context value, use the context consumer with the `useContext` hook:
```jsx
// Context consumer
const contextValue = useContext(MyContext);
```
### Concepts and Potential Issues
-   **Context Dependency**: Make sure the component using `useContext` depends on the context value by passing the necessary context dependencies.
-   **Provider Hierarchy**: Properly nest the context provider and consumer within the component hierarchy to ensure the consumer can access the context value.
-   **Avoid Overusing Context**: Use context for global state or data that needs to be accessed by multiple components, but avoid overusing it for every piece of data in your application.
-   **Performance Considerations**: Optimize performance by memoizing the context value or using memoization techniques like `useMemo` when the context value changes frequently.
-   **Testing Considerations**: Provide a suitable context value for testing components that use `useContext` by mocking or providing a mock context value.

## Firebase
Create account, project and Register as Web Application, step by step.
step 1: npm install firebase, Create Configuration file and copypaste the settings from project Configuration.
