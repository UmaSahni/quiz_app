import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import App from './App.jsx'
import UserContextProvider from './Context/UserContext.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
<BrowserRouter>
 <UserContextProvider>
     <App />
 </UserContextProvider>
</BrowserRouter>
)
