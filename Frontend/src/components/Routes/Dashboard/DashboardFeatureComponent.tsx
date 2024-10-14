// import reactLogo from '.../../../assets/react-logo.svg'

//Conditional JSX via 'Function-based conditional rendering'
// function HeaderLogo(): JSX.Element | undefined {
//   if (reactLogo) {
//     return (
//       <a href="https://github.com/lee-stevens" target="_blank">
//         <img src={reactLogo} className="logo" alt="Logo" />
//       </a>
//     )
//   }
// }

export default function DashboardFeatureComponent() {
  // const headerLogo = HeaderLogo()
  const headerLogo = null;

  return (
    <div id="dashboard-wrapper">
        {headerLogo} { /* Conditional JSX - Only renders if truthy */}
        <h1>Dashboard</h1>
        <div className="card">
        </div>
    </div>
  )
}
