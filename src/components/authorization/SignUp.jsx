import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { setUser } from 'redux/slices/userSlice'

import Form from './Form'

function SignUp() {
	const dispatch = useDispatch()
	const navigate = useNavigate()

	const [error, setError] = React.useState()

	const handleRegister = (email, password) => {
		const auth = getAuth()
		createUserWithEmailAndPassword(auth, email, password)
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
			.catch(() => setError('Данный email адрес уже существует'))
	}

	return (
		<Form button="Отправить" title="Регистрация" handleClick={handleRegister} error={error}></Form>
	)
}

export default SignUp
