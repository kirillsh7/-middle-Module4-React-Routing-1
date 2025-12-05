import { Routes, Route } from 'react-router-dom'
import { Home } from '../../pages'
import { CategoryList, ItemDetail } from '../../components'
import { AppLayout } from '../../layouts'
import { Login } from '../../pages/Login/Login'
import { ProtectedRoute } from '../../components'
export const AppRouter = () => {
	return <Routes>
		<Route element={<AppLayout />}>
			<Route path="/" element={<Home />} />
			<Route path="/category"  >
				<Route path=':categoryId' >
					<Route index element={
						<ProtectedRoute>
							<CategoryList />
						</ProtectedRoute>
					}
					/>
					<Route path=':itemId' element={
						<ProtectedRoute>
							<ItemDetail />
						</ProtectedRoute>
					}
					/>
				</Route>
			</Route>
			<Route path="/login" element={<Login />} />
			<Route path="*" element={
				<h1 style={{
					textAlign: 'center',
					marginTop: '20px',
					fontSize: '50px'
				}}>404</h1>} />
		</Route>
	</Routes>
}


