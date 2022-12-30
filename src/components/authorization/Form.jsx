import React from 'react'

function Form({ title, handleClick }) {
	const [email, setEmail] = React.useState('')
	const [pass, setPass] = React.useState('')

	return (
		<div>
			<input
				type="email"
				value={email}
				placeholder="email"
				onChange={e => setEmail(e.target.value)}
			/>
			<input
				type="password"
				value={pass}
				placeholder="password"
				onChange={e => setPass(e.target.value)}
			/>
			<button onClick={() => handleClick(email, pass)}>{title}</button>
		</div>
	)
}

export default Form
