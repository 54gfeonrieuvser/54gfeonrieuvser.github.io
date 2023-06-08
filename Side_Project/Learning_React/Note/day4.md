# Learning React.js Day 4
## React Rounter Basic

### Router, Routes, and Route

**Prerequisites**: To use React Router, you need to install the `react-router-dom` package. You can do this by running the following command:

`npm install react-router-dom` 


Here is a simple demonstration of React Router's usage:


```javascript
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import NotFound from './components/NotFound';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}` 
```
In this example:

-   The `Router` component from `react-router-dom` is used as the top-level component to wrap the routes.
-   Inside the `Router`, the `Routes` component is used to define the routing logic.
-   Each individual route is defined using the `Route` component. The `path` prop specifies the URL path, and the `element` prop specifies the component to be rendered when the URL matches the path.
-   In this example, we have three routes: "/" for the home page, "/about" for the about page, and "*" for any other unknown routes (handled by the `NotFound` component).

### Link

The `Link` component in `react-router-dom` is used to replace the native `<a>` tag for declarative navigation within your application. It prevents full page refresh and utilizes client-side routing to update the URL and render the appropriate components without reloading the entire page.

Here is an example of using the `Link` component for navigation:
```javascript
import React from 'react';
import { Link } from 'react-router-dom';

export default function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
}
```
The `Link` component accepts a `to` prop, which specifies the target URL or route path to navigate to. When a `Link` is clicked, it triggers the routing mechanism to render the corresponding route component and update the URL in the address bar.

By using React Router and the `Link` component, you can easily create a navigational structure for your application and handle routing with a smooth user experience.

## React Router Hooks

### useNavigate

The `useNavigate` hook in `react-router-dom` allows you to programmatically navigate to different routes within your application. It provides a function that you can call to trigger navigation changes. Here's an example:

```javascript
import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function MyComponent() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/about'); // Navigate to the '/about' route
  };

  return (
    <div>
      <button onClick={handleClick}>Go to About</button>
    </div>
  );
}
```
In this example, the `useNavigate` hook is used to obtain the `navigate` function. When the button is clicked, the `navigate` function is called with the desired route as its argument, triggering the navigation to the specified route.

You can also pass data along with the navigation using the `state` option:
```javascript
import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function MyComponent() {
  const navigate = useNavigate();

  const handleClick = () => {
    const data = { id: 123, name: 'John Doe' };
    navigate('/about', { state: data }); // Pass data along with the navigation
  };

  return (
    <div>
      <button onClick={handleClick}>Go to About</button>
    </div>
  );
}
```

In this case, an object `data` is passed along with the navigation to the `/about` route. This data can be accessed in the target component using the `useLocation` hook.

### useLocation

The `useLocation` hook allows you to access the current location object in a functional component. The location object contains information about the current URL, including any state data passed during navigation.

Here's an example of how you can use the `useLocation` hook to access the passed data:

```javascript
import React from 'react';
import { useLocation } from 'react-router-dom';

export default function About() {
  const location = useLocation();
  const data = location.state;

  console.log(data.id); // Output: 123
  console.log(data.name); // Output: John Doe

  return (
    <div>
      <h2>About Page</h2>
      {/* Render the rest of the component */}
    </div>
  );
}
```

In this example, the `useLocation` hook is used to obtain the `location` object. The `state` property of the `location` object contains the data that was passed during navigation. By accessing `location.state`, you can retrieve the passed data and use it within the component.

It's important to note that the `state` property is only available if data was passed during navigation. Therefore, it's a good practice to check if the data exists before accessing its properties to avoid potential errors.
