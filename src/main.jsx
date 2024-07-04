import { createRoot } from 'react-dom'
import App from './App'
import './styles/index.css'

console.log(<App />)

const container = document.getElementById('root')

createRoot(container).render(<App />)
