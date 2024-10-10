import './AppContentComponent.scss'
import reactLogo from '@Assets/react.svg'

//Conditional JSX via 'Function-based conditional rendering'
function HeaderLogo(): JSX.Element | undefined {
  if (reactLogo) {
    return (
      <a href="https://github.com/lee-stevens" target="_blank">
        <img src={reactLogo} className="logo" alt="Logo" />
      </a>
    )
  }
}

export default function AppContentComponent() {
  const headerLogo = HeaderLogo()
  return (
    <>
      <div id="app-contents">
        {headerLogo} { /* Conditional JSX - Only renders if truthy */}
        <h2>Dashboard</h2>
        <div className="card">
        </div>
      </div>
    </>
  )
}


