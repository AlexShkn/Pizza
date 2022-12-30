import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'

import { setUser } from '../../redux/slices/userSlice'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import Form from './Form'

function Login() {
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
			.catch(() => alert('Пользователь не существует'))
	}

	return <Form title="sign in" handleClick={handleLogin}></Form>
}

export default Login
