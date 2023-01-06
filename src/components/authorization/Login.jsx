import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'

import { setUser } from 'redux/slices/userSlice'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import Form from './Form'

function Login() {
	const [error, setError] = React.useState()
	const dispatch = useDispatch()
	const navigate = useNavigate()

	const handleLogin = (email, password) => {
		const auth = getAuth()
		signInWithEmailAndPassword(auth, email, password)
			.then(({ user }) => {
				console.log(user)
				dispatch(
					setUser({
						email: user.email,
						id: user.id,
						token: user.accessToken,
					}),
				)
				navigate('/')
			})
			.catch(() => setError('Пользователя не существует'))
	}

	return (
		<Form
			button="Войти"
			title="Введите email и пароль"
			handleClick={handleLogin}
			error={error}></Form>
	)
}

export default Login
