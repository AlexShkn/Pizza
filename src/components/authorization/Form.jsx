import React from 'react'
import { useForm } from 'react-hook-form'

import './form.scss'

function Form({ title, handleClick, button, error }) {
	const [email, setEmail] = React.useState('')
	const [pass, setPass] = React.useState('')

	const {
		register,
		formState: { errors, isValid },
		reset,
		handleSubmit,
	} = useForm({
		mode: 'onBlur',
	})

	return (
		<form onSubmit={handleSubmit(() => handleClick(email, pass))} className="l-form">
			<div action="" className="form">
				<h1 className="form__title">{title}</h1>
				<div style={{ height: '40px' }}>
					<p style={{ color: 'red' }}>{errors?.email?.message || error}</p>
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
						placeholder="Введите ваш email"
						onChange={e => setEmail(e.target.value)}
					/>
					<label className="form__label">Email</label>
				</div>

				<div style={{ height: '40px' }}>
					{errors?.password && (
						<p style={{ color: 'red' }}>{errors?.password?.message || 'Error!'}</p>
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
						placeholder="Введите ваш пароль"
						onChange={e => setPass(e.target.value)}
					/>
					<label className="form__label">Password</label>
				</div>

				<input
					className="form__submit form__button"
					type="submit"
					value={button}
					// disabled={!isValid}
				/>
			</div>
		</form>
	)
}

export default Form
