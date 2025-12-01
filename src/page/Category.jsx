import { useParams } from 'react-router-dom'
import { locations } from '../../public/location'
import { characters } from '../../public/characters'
import { episodes } from '../../public/episode'
export const Category = () => {
	const { id } = useParams()
	console.log(locations)
	console.log(id)
	return (
		<>
			<h1>Category</h1>
		</>
	)
}