import { useEffect, useState, useCallback, useRef } from 'react'
import { get } from '../../api/Api'

export function useInfinityScroll(categoryId) {

	const [pageNumber, setPageNumber] = useState(1)
	const [items, setItems] = useState([])
	const [hasMore, setHasMore] = useState(true)
	const [loading, setLoading] = useState(false)

	const observer = useRef()

	const lastElementRef = useCallback(node => {
		if (loading) return

		if (observer.current) observer.current.disconnect()

		observer.current = new IntersectionObserver(entries => {
			if (entries[0].isIntersecting && hasMore && !loading) {
				setPageNumber(prev => prev + 1)
			}
		}, {
			rootMargin: '100px',
		})

		if (node) observer.current.observe(node)
	}, [hasMore, loading])

	useEffect(() => {
		setItems([])
		setPageNumber(1)
		setHasMore(true)
		setLoading(false)
	}, [categoryId])

	useEffect(() => {
		if (!categoryId || !hasMore) return

		setLoading(true)

		get(categoryId, {
			params: {
				page: pageNumber
			}
		})
			.then(res => {
				setHasMore(res.info?.next !== null)

				setItems(prev => {
					const newItems = [...prev, ...res.results]
					const uniqueMap = new Map()

					newItems.forEach(item => {
						uniqueMap.set(item.id, item)
					})

					return Array.from(uniqueMap.values())
				})
			})
			.catch(err => {
				console.error('Ошибка загрузки:', err)
				setHasMore(false)
			})
			.finally(() => {
				setLoading(false)
			})

	}, [categoryId, pageNumber])

	return { items, lastElementRef, loading }
}