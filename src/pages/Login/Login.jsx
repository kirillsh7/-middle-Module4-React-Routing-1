import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useAuth } from '../../context'
import './Login.css'
export const Login = () => {
	const [username, setUsername] = useState('')
	const navigate = useNavigate()
	const location = useLocation()
	const { login } = useAuth()
	const from = location.state?.from?.pathname || '/'

	const handleSubmit = async (event) => {
		event.preventDefault()
		login(username)
		navigate(from, { replace: true })
	}
	const handleChange = (event) => {
		setUsername(event.target.value)
	}

	return (
		<div className="auth-container">
			<div className="auth-card">
				<div className="auth-header">
					<h1 className="auth-title">Авторизация</h1>
				</div>

				<form onSubmit={handleSubmit} className="auth-form">
					<div className="input-group">
						<label htmlFor="username" className="input-label">
							Username
						</label>
						<input
							id="username"
							type="text"
							value={username}
							onChange={handleChange}
							placeholder="Enter your username"
							className="username-input"
							autoFocus
							maxLength={20}
						/>

					</div>

					<button
						type="submit"
						className="submit-btn"
					>
						Войти
					</button>
				</form>
			</div>
		</div>
	)
};

