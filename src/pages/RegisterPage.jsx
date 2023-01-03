import React from 'react'
import { Link } from 'react-router-dom'
import SignUp from '../components/authorization/SignUp'

function RegisterPage() {
	return (
		<div>
			<SignUp />
			<p style={{ fontSize: '20px' }}>
				У Вас уже есть аккаунт?{' '}
				<Link to="/login">
					<span style={{ color: '#1a73e8' }}> Войти</span>
				</Link>
			</p>
		</div>
	)
}

export default RegisterPage
