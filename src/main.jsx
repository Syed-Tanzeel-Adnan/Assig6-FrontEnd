import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './tailwind.css'; // Ensure this line is present


createRoot(document.getElementById('root')).render(
    <App />
)
