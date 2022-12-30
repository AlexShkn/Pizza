import React from 'react'
import { Link } from 'react-router-dom'
import SignUp from '../components/authorization/SignUp'

function RegisterPage() {
	return (
		<div>
			<h1>Register</h1>
			<SignUp />
			<p>
				Already ha an account? <Link to="/login">Sign</Link>
			</p>
			<Link to="/">На главную</Link>
		</div>
	)
}

export default RegisterPage
