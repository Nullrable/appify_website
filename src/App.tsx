import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AppPage from './pages/AppPage';

// Permanent redirect component (uses replaceState for 301-like behavior)
function PermanentRedirect({ to }: { to: string }) {
  // Use window.location for true 301 redirect - only runs on client
  if (typeof window !== 'undefined') {
    window.location.replace(to);
  }
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PermanentRedirect to="/en/" />} />
        <Route path="/:lang/" element={<Home />} />
        <Route path="/:lang/:appId/" element={<AppPage />} />
      </Routes>
    </BrowserRouter>
  );
}
