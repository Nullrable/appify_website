import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import AppPage from './pages/AppPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/en/" replace />} />
        <Route path="/:lang/" element={<Home />} />
        <Route path="/:lang/:appId/" element={<AppPage />} />
      </Routes>
    </BrowserRouter>
  );
}
