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
## useContext

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


#### Step 1: createContext
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
- 
## Firebase

To learn how to implement Firebase in your React.js app, follow these steps:

### Step 1: Create Firebase Account and Project

-   Create an account on Firebase.
-   Set up a new project.

### Step 2: Register as Web Application and Install Firebase

-   Register your app as a Web Application within the Firebase project.
-   Install Firebase in your project using the command `npm install firebase`.
-   Create a configuration file and copy-paste the settings from the project configuration in Firebase.

### Step 3: Set up Firestore Database and Add Handler Functions

Implement the following functions within the Firestore SDK:

```javascript 
writeDoc: (...args) => {
        const [inputs, collection_name] = args;
        return new Promise(async resolve => {
            const randomIndex = Math.floor(Math.random() * 100000000);
            try {
                const docRef = doc(db, collection_name, `${randomIndex}`);
                await setDoc(docRef, {
                    title: inputs.title,
                    path: inputs.path,
                    createdAt: serverTimestamp()
                });
                resolve("New document inserted successfully!");
            } catch (e) {
                // Handle error
            }
        });
    }
readDocs: (...args) => {
        const [collection_name] = args;
        let docs = [];
        const ref = collection(db, collection_name);
        return new Promise(async resolve => {
            try {
                const snapshots = await getDocs(ref);
                snapshots.forEach(doc => {
                    const d = { ...doc.data() };
                    docs.push(d);
                });
                resolve(docs);
            } catch (e) {
                console.log(e);
            }
        });
    } 
```
### Step 4: Perform Database Operations
```javascript
readDocs("stocks").then(console.log);
writeDoc(inputs, "stocks").then(console.log);` 
```
## .env Variables

To securely store sensitive information or configuration settings in your React.js app, you can use environment variables with a `.env` file. Here's how you can set it up:

1.  Create a `.env` file in the root directory of your project.
2.  Add the `.env` file to your `.gitignore` file to ensure it's not committed to version control, keeping your sensitive information secure.

In your `.env` file, define your environment variables with the `REACT_APP_` prefix. For example:

`REACT_APP_API_KEY=veryImportantInfo` 

To access these static variables within your React components, you can use `process.env.REACT_APP_` followed by the variable name. For instance, to access the API key defined above, you would use:

`const apiKey = process.env.REACT_APP_API_KEY; // veryImportantInfo` 

### Hints
- Remember that the `REACT_APP_` prefix is required for the environment variables to be recognized in your React app.

- By using environment variables and the `.env` file, you can keep sensitive information separate from your codebase and easily manage different configurations for different environments (e.g., development, production).

- Please note that you'll need to restart your development server (e.g., using `npm start`) for the changes in the `.env` file to take effect.

