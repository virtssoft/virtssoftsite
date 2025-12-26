
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

const rootElement = document.getElementById('root');

if (!rootElement) {
  console.error("Critical Error: Root element '#root' not found in document.");
} else {
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
      <div style="color: white; padding: 40px; text-align: center; font-family: sans-serif;">
        <h1 style="color: #ef4444;">Erreur de chargement</h1>
        <p>Une erreur est survenue lors de l'initialisation de l'application.</p>
        <pre style="background: #1a1a1a; padding: 20px; border-radius: 8px; text-align: left; display: inline-block; margin-top: 20px;">${error instanceof Error ? error.message : String(error)}</pre>
      </div>
    `;
  }
}
