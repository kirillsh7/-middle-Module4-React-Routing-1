import { useParams, Link, useNavigate } from 'react-router-dom'
import { detailConfigs } from '../../../constants'
import { useState, useEffect } from 'react'
import { get } from '../../../api/Api'
import './ItemDetail.css'

export const ItemDetail = () => {
	const { categoryId, itemId } = useParams()
	const [loading, setLoading] = useState(true)
	const [item, setItem] = useState(null)
	const navigate = useNavigate()

	useEffect(() => {

		get(`${categoryId}/${itemId}`)
			.then(res => {
				setItem(res)
				setLoading(false)
			})
			.catch(error => {
				console.error('Error loading item:', error)
				setLoading(false)
			})
	}, [categoryId, itemId])

	if (loading) {
		return (
			<div className="loading">
				<h1>Loading...</h1>
			</div>
		)
	}

	if (!item) {
		return (
			<div className="not-found">
				<h1>Item not found</h1>
				<Link to={`/category/${categoryId}`}>← Back to {categoryId}</Link>
			</div>
		)
	}

	const config = detailConfigs[categoryId]
	const currentConfig = config(item)

	return (
		<div className="item-detail-page" style={{ '--accent-color': currentConfig.accentColor }}>
			<div className="back-button-container">
				<button onClick={() => navigate(`/category/${categoryId}`)} className="back-button">
					← Back to {categoryId.charAt(0).toUpperCase() + categoryId.slice(1)}
				</button>
			</div>

			<div className="item-detail-container">
				<div className="item-image-section">
					<div className="image-wrapper">
						{currentConfig.image ? (
							<img
								src={currentConfig.image}
								alt={currentConfig.title}
								className="item-detail-image"
							/>
						) : (
							<div className="placeholder-image" style={{ backgroundColor: currentConfig.accentColor + '20' }}>
								<span className="placeholder-text">
									{categoryId.charAt(0).toUpperCase()}
								</span>
							</div>
						)}
						{item.status && (
							<div className="status-badge large" style={{ backgroundColor: currentConfig.accentColor }}>
								{item.status}
							</div>
						)}
					</div>
				</div>

				<div className="item-info-section">
					<div className="item-header">
						<h1 className="item-title">{currentConfig.title}</h1>
						<div className="item-id">ID: {item.id}</div>
					</div>

					<div className="info-grid">
						{currentConfig.fields.map((field, index) => (
							<div key={index} className="info-card">
								<h3 className="info-title">{field.label}</h3>
								{field.type === 'badge' ? (
									<span className="info-badge" style={{ backgroundColor: currentConfig.accentColor }}>
										{field.value}
									</span>
								) : (
									<p className="info-value">{field.value}</p>
								)}
							</div>
						))}
					</div>

					<div className="additional-info">
						<h2 className="section-title">Additional Information</h2>
						<div className="details-list">
							{currentConfig.additionalInfo.map((info, index) => (
								<div key={index} className="detail-item">
									<span className="detail-label">{info.label}</span>
									<span
										className={`detail-value ${info.highlight ? 'highlight' : ''}`}
										style={info.highlight ? { color: currentConfig.accentColor } : {}}
									>
										{info.value}
									</span>
								</div>
							))}
						</div>
					</div>

					<div className="action-buttons">
						<button className="action-btn primary" style={{ backgroundColor: currentConfig.accentColor }}>
							Add to Favorites
						</button>
						<button className="action-btn secondary" style={{ borderColor: currentConfig.accentColor, color: currentConfig.accentColor }}>
							Share
						</button>
					</div>
				</div>
			</div>

			{/* <div className="related-navigation">
				<div className="nav-buttons">
					{currentIndex > 0 && (
						<Link
							to={`/category/${categoryId}/${items[currentIndex - 1].id}`}
							className="nav-btn prev"
							style={{ borderColor: currentConfig.accentColor, color: currentConfig.accentColor }}
						>
							← Previous
						</Link>
					)}

					<span className="nav-info">
						{currentIndex + 1} of {items.length}
					</span>

					{currentIndex < items.length - 1 && (
						<Link
							to={`/category/${categoryId}/${items[currentIndex + 1].id}`}
							className="nav-btn next"
							style={{ borderColor: currentConfig.accentColor, color: currentConfig.accentColor }}
						>
							Next →
						</Link>
					)}
				</div>
			</div> */}
		</div>
	)
}