import './App.scss'
import './styles/common.scss'
import './styles/colors.scss'
import '../tsconfig.json'
import AppContentComponent from './components/Features/AppContentComponent'
import UtilitiesComponent from './components/Utilities/UtilitiesComponent'

export default function App() {
  return (
    <div id="app-wrapper">
      <UtilitiesComponent />
      <AppContentComponent />
    </div>
  )
}
