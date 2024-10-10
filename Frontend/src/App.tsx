import './App.scss'
import './styles/common.scss'
import DashboardComponent from './components/DashboardComponent'
import { useState } from 'react'
import reactLogo from './assets/react.svg'

export default function App() {
  const [count, setCount] = useState(0)
  const [showDashboard, setShowDashboard] = useState(false)

  // React, just like Angular are both focused on Immutability for change detection
  // When incrementing don't use ++ as that mutates the number, instead do x + 1 which returns a new value & reference

  const incremementCount = () => setCount(count + 1);
  const toggleDashboard = () => setShowDashboard(showDashboard => !showDashboard);

  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <div className="card">
        <button onClick={() => toggleDashboard()}>
          Show Dashboard: {showDashboard}
        </button>
        { /* Incremenet count using count + 1 instead of ++ because it creates a new value & reference for change detection to work */ }
        <button onClick={() => incremementCount()}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      { /* Conditional JSX via Short Circuit Rendering - If JS statement is true then render encased JSX */ }
      {showDashboard && (
        <div>
          <DashboardComponent logo={reactLogo} />
        </div>
      )}
    </>
  )
}
