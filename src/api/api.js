import axios from 'axios'

const URL = 'https://rickandmortyapi.com/api'
const config = {
	baseURL: URL,
	headers: {
		'Content-Type': 'application/json;charset=utf-8',
	}
}

export const api = axios.create(config)
api.interceptors.response.use(
	(response) => {
		return response.data
	},
	(error) => {
		const message = error.response?.data?.error || error.message
		return Promise.reject(new Error(message))
	}

)

export const get = (url, params = {}) => api.get(url, params)