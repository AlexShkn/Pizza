import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import Modal from 'react-modal'
import PizzaBlock from './components/PizzaBlock'

import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'))
Modal.setAppElement('#root')

root.render(
	<BrowserRouter>
		<App />
	</BrowserRouter>,
	PizzaBlock,
)
