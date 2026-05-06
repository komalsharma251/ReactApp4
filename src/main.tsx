
// Import React StrictMode for highlighting potential problems
import { StrictMode } from 'react'

// Import createRoot method from React DOM
import { createRoot } from 'react-dom/client'

// Import global CSS styles
import './App.css'

// Import main App component
import App from './App'

// Create React root and render the application
createRoot(document.getElementById('root')!).render(
  // StrictMode helps identify issues during development
  <StrictMode>
    
    {/* Main application component */}
    <App />
    
  </StrictMode>,
)