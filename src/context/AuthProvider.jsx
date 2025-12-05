import { createContext, useContext, useEffect, useState } from 'react'

const AuthContext = createContext({})

export const useAuth = () => useContext(AuthContext)

const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null)

	useEffect(() => {
		const storedUser = localStorage.getItem('user')
		if (storedUser) {
			setUser(storedUser)
		}
	}, [])
	const login = (user) => {
		setUser(user)
		localStorage.setItem('user', user)
	}
	const logout = () => {
		setUser(null)
		localStorage.removeItem('user')
	}

	return <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>
}
export default AuthProvider