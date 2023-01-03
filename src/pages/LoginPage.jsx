import React from 'react'
import { Link } from 'react-router-dom'

import Login from '../components/authorization/Login'

function LoginPage() {
	return (
		<div>
			<Login />
			<p style={{ fontSize: '20px' }}>
				Или
				<Link to="/register">
					<span style={{ color: '#1a73e8' }}> зарегистрироваться</span>
				</Link>
			</p>
		</div>
	)
}

export default LoginPage
