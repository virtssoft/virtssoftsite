
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

const startApp = () => {
  const rootElement = document.getElementById('root');

  if (!rootElement) {
    console.error("Critical Error: Root element '#root' not found.");
    return;
  }

  try {
    const root = createRoot(rootElement);
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
    console.log("Virtssoft App successfully mounted.");
  } catch (error) {
    console.error("Virtssoft App failed to render:", error);
    rootElement.innerHTML = `
      <div style="color: white; padding: 40px; text-align: center; font-family: sans-serif; background: #0a0a0a; min-height: 100vh; display: flex; flex-direction: column; align-items: center; justify-content: center;">
        <h1 style="color: #3b82f6; font-weight: 200; letter-spacing: 4px; text-transform: uppercase;">Virtssoft</h1>
        <p style="color: #666; margin-top: 20px;">Une erreur est survenue lors du chargement des modules.</p>
        <button onclick="window.location.reload()" style="margin-top: 20px; padding: 10px 20px; background: #1e293b; color: white; border: none; border-radius: 8px; cursor: pointer;">Réessayer</button>
      </div>
    `;
  }
};

// Ensure DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', startApp);
} else {
  startApp();
}
