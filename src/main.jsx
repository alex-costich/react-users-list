import { createRoot } from 'react-dom'
import './index.css'

const app = (
	<>
		<div></div>
	</>
)

console.log(app)

const container = document.getElementById('root')

createRoot(container).render(app)
