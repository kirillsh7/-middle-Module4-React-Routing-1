import { Link, Outlet } from 'react-router-dom'
import { useAuth } from '../../context'
import styles from '../../style.module.css'
export const AppLayout = () => {
	const { user, logout } = useAuth()
	return (
		<div className={styles.container}>
			<nav className={styles.topNav}>
				<div className={styles.navLinks}>
					<Link to="/" className={styles.navLink}>
						Главная
					</Link>
					{!user ? <Link to="/login" className={styles.navLink}>Войти</Link> : <button onClick={logout} className={styles.navLink}>Выйти</button>}

				</div>
			</nav>
			<Outlet />
		</div>
	)

}