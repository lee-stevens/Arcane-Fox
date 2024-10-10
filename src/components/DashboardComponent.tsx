import '../App.scss'
import './DashboardComponent.css'

//Conditional JSX via 'Function-based conditional rendering'
function HeaderLogo(props: { logo?: string }): JSX.Element | undefined {
  if (props.logo) {
    return (
      <a href="https://github.com/lee-stevens" target="_blank">
        <img src={props.logo} className="logo" alt="Logo" />
      </a>
    )
  }
}

//Destructuring the input params
export default function DashboardComponent(props: { logo?: string }) {
  const headerLogo = HeaderLogo(props)

  return (
    <>
      {headerLogo} { /* Conditional JSX - Only renders if truthy */}
      <h2>Dashboard</h2>
      <div className="card">
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
    </>
  )
}


