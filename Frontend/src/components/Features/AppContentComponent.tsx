import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './AppContentComponent.scss'
import DashboardFeatureComponent from './Dashboard/DashboardFeatureComponent'
import MarkdownFeatureComponent from './Markdown/MarkdownFeatureComponent'
import UtilitiesComponent from '../Utilities/UtilitiesComponent';

export type Feature = 'Dashboard' | 'Markdown';

export default function AppContentComponent() {
  return (
    <BrowserRouter>
      <UtilitiesComponent />
      <div id="app-contents">
        <Routes>
          <Route path="/" element={<DashboardFeatureComponent />} />
          <Route path="/dashboard" element={<DashboardFeatureComponent />} />
          <Route path="/markdown" element={<MarkdownFeatureComponent />} />
          <Route path="*" element={<DashboardFeatureComponent />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}
