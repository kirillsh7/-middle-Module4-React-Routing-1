import { Component } from 'react'

export class ErrorBoundary extends Component {
	constructor(props) {
		super(props)
		this.state = { hasError: false }
	}

	static getDerivedStateFromError(error) {
		console.log(error)
		return { hasError: true }
	}

	componentDidCatch(error, errorInfo) {
		console.log(error, errorInfo)
	}

	render() {
		if (this.state.hasError) {
			return <h2 style={{ textAlign: 'center', color: 'white', fontSize: '50px' }}>Что-то пошло не так</h2>
		}
		return this.props.children
	}
}