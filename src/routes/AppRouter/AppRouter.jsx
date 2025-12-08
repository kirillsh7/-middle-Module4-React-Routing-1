import { Component, ProtectedRoute, ErrorBoundary } from '../../components'
import { Routes, Route } from 'react-router-dom'
import { Home } from '../../pages'
import { AppLayout } from '../../layouts'

const Element = ({ name, url }) => {
	return <ProtectedRoute>
		<ErrorBoundary>
			<Component key={name} name={name} url={url} />
		</ErrorBoundary>
	</ProtectedRoute>
}

export const AppRouter = () => {
	return <Routes>
		<Route element={<AppLayout />}>
			<Route path="/" element={<Home />} />

			<Route path="/category/:categoryId"  >

				<Route index element={
					<ProtectedRoute>
						<Element name='CategoryList' url='../../../components/common/CategoryList/ChategoryList.jsx' />
					</ProtectedRoute>
				}
				/>
				<Route path=':itemId' element={
					<Element name='ItemDetail' url='../../../components/common/ItemDetail/ItemDetail.jsx' />
				}
				/>

			</Route>
			<Route path="/login" element={
				<ErrorBoundary>
					<Component name='Login' url='../../../pages/Login/Login.jsx' />
				</ErrorBoundary>
			} />

			<Route path="*" element={
				<h1 style={{
					textAlign: 'center',
					marginTop: '20px',
					fontSize: '50px'
				}}>404</h1>} />
		</Route>
	</Routes>
}
