import React from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

import './form.scss'

function Form({ title, handleClick, button, error }) {
	const [email, setEmail] = React.useState('')
	const [pass, setPass] = React.useState('')

	const {
		register,
		formState: { errors, isValid },
		handleSubmit,
	} = useForm({
		mode: 'onBlur',
	})

	let errorDescr = ''

	switch (error) {
		case 'auth/wrong-password':
			errorDescr = 'Неправильный логин или пароль'
			break
		case 'auth/user-not-found':
			errorDescr = (
				<div>
					<span>Пользователя не существует </span>
					<Link to="/register">
						<b style={{ color: 'rgb(26, 115, 232)' }}>создать нового?</b>
					</Link>
				</div>
			)
			break
		case 'auth/email-already-in-use':
			errorDescr = 'Данный email адрес уже занят'
			break
		default:
			break
	}

	return (
		<form
			onSubmit={handleSubmit(() => handleClick(email, pass))}
			className="l-form">
			<div action="" className="form">
				<h1 className="form__title">{title}</h1>
				<div style={{ height: '40px' }}>
					<p style={{ color: 'red' }}>{errors?.email?.message || errorDescr}</p>
				</div>

				<div className="form__div">
					<input
						{...register('email', {
							required: 'Поле обязательно для заполнения',
							pattern: {
								value: /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i,
								message: 'Пожалуйста введите корректный email',
							},
						})}
						type="email"
						value={email}
						className="form__input"
						placeholder=" "
						onChange={e => setEmail(e.target.value)}
					/>
					<label className="form__label">Email</label>
				</div>

				<div style={{ height: '40px' }}>
					{errors?.password && (
						<p style={{ color: 'red' }}>
							{errors?.password?.message || 'Error!'}
						</p>
					)}
				</div>

				<div className="form__div">
					<input
						{...register('password', {
							required: 'Поле обязательно для заполнения',
							minLength: {
								value: 8,
								message: 'Минимум 8 символов',
							},
						})}
						type="password"
						value={pass}
						className="form__input"
						placeholder=" "
						onChange={e => setPass(e.target.value)}
					/>
					<label className="form__label">Password</label>
				</div>

				<input
					className="form__submit form__button"
					type="submit"
					value={button}
				/>
			</div>
		</form>
	)
}

export default Form
