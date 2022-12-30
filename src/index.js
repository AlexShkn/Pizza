import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import Modal from 'react-modal'

import App from './App'
import './firebase'

const root = ReactDOM.createRoot(document.getElementById('root'))
Modal.setAppElement('#root')

root.render(
	<Provider store={store}>
		<App />
	</Provider>,
)
