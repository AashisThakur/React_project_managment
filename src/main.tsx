import { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { StyleSheetManager } from 'styled-components'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Suspense fallback={<div>Loading...</div>}>
    <BrowserRouter basename='https://aashisthakur.github.io/React_project_managment/'>
      <StyleSheetManager shouldForwardProp={(prop) => prop !== "shake"}>
        <App />
      </StyleSheetManager>
    </BrowserRouter>
  </Suspense>
)
