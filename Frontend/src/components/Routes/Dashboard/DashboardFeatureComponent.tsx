import { useState, useEffect } from "react";

/* EXAMPLE: Conditional JSX via 'Function-based conditional rendering`
function HeaderLogo(): JSX.Element | undefined {
  if (reactLogo) {
    return (
      <a href="https://github.com/lee-stevens" target="_blank">
        <img src={reactLogo} className="logo" alt="Logo" />
      </a>
    )
  }
}
*/

export default function DashboardFeatureComponent() {
    /* EXAMPLE: How to use Effects with a timer and only tie it to a speciifc state as a useEffect Dependency */
    const [counter, setCounter] = useState(0);
    useEffect(() => {
      const timeoutId = setTimeout(() => {
        setCounter(prevCounter => {
          return prevCounter + 1; // Increment the counter
        });
      }, 1000);
    
      return () => clearTimeout(timeoutId);
    }, [counter]);

  return (
    <div id="dashboard-wrapper">
        <h1>Dashboard</h1>
        <div className="card">
          <h2>Card</h2>
          <p>Counter: {counter}</p>
        </div>
    </div>
  )
}
