import React ,{ StrictMode, Suspense  } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
const App = React.lazy(() => import('./App.tsx'));
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <Suspense fallback={<div>Loading...</div>}>
      <App />
      </Suspense>
    </BrowserRouter>
  </StrictMode>,
)
