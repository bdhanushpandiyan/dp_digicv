import { StrictMode, Suspense, lazy } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './styles/legacy.css';
import './styles/tokens.css';
import './styles/base.css';

// The previous single-page implementation is kept, unchanged, behind ?legacy
// until the new structure is approved. It is code-split so it costs the new
// site nothing.
const LegacyApp = lazy(() => import('./legacy/LegacyApp.jsx'));
const showLegacy = new URLSearchParams(window.location.search).has('legacy');

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {showLegacy ? (
      <Suspense fallback={null}>
        <LegacyApp />
      </Suspense>
    ) : (
      <App />
    )}
  </StrictMode>,
);
