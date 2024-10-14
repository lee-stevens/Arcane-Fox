
import DashboardFeatureComponent from '@Components/Routes/Dashboard/DashboardFeatureComponent';
import MarkdownFeatureComponent from '@Components/Routes/Markdown/MarkdownFeatureComponent';
import UtilitiesComponent from '@Components/Utilities/UtilitiesComponent';
import './App.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <div id="app-wrapper">
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
    </div>
  )
}
