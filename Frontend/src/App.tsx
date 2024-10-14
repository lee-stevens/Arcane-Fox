import './App.scss'
import './styles/common.scss'
import './styles/colors.scss'
import '../tsconfig.json'
import AppContentComponent from './components/Features/AppContentComponent'

export default function App() {
  return (
    <div id="app-wrapper">
      <AppContentComponent />
    </div>
  )
}
