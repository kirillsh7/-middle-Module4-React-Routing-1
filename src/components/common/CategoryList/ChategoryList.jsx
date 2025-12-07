import { Link, useParams } from 'react-router-dom'
import { useInfinityScroll } from '../../../hooks/useInfinityScroll/useInfinityScroll'
import { configs } from '../../../constants'
import './CategoryList.css'

export const CategoryList = () => {

	const { categoryId } = useParams()
	const { items, lastElementRef } = useInfinityScroll(categoryId)
	const config = configs[categoryId]

	return (
		<div className="category-list-page" style={{ '--category-color': config.color }}>
			<div className="cards-grid">
				{items.map((item, index) => {

					const isLastElement = index === items.length - 1

					return (
						<Link
							key={item.id}
							ref={isLastElement ? lastElementRef : null}
							to={`/category/${categoryId}/${item.id}`}
							className="category-card-link"
						>
							<div className="category-card">
								<div className="card-image-container">
									{config.gridView.imageKey && item[config.gridView.imageKey] ? (
										<img
											src={item[config.gridView.imageKey]}
											alt={item[config.gridView.titleKey]}
											className="card-image"
										/>
									) : (
										<div
											className="card-placeholder"
											style={{ backgroundColor: config.color + '20' }}
										>
											<span className="placeholder-icon">
												{categoryId.charAt(0).toUpperCase()}
											</span>
										</div>
									)}

									{config.gridView.badgeKey && item[config.gridView.badgeKey] && (
										<div
											className="card-badge"
											style={{ backgroundColor: config.color }}
										>
											{item[config.gridView.badgeKey]}
										</div>
									)}
								</div>

								<div className="card-content">
									<h3 className="card-title">{item[config.gridView.titleKey]}</h3>
									<p className="card-subtitle">{item[config.gridView.subtitleKey]}</p>

									<div className="card-fields">
										{config.fields
											.filter(field => !['name', config.gridView.subtitleKey].includes(field.key))
											.slice(0, 2)
											.map(field => (
												<div key={field.key} className="card-field">
													<span className="field-label">{field.label}:</span>
													<span className="field-value">
														{field.type === 'date'
															? new Date(item[field.key]).toLocaleDateString()
															: item[field.key] || 'Unknown'
														}
													</span>
												</div>
											))}
									</div>

									<div className="card-footer">
										<span className="card-id">ID: {item.id}</span>
										<button className="view-details-btn">
											View Details →
										</button>
									</div>
								</div>
							</div>
						</Link>
					)
				})}
			</div>
		</div>
	)
}
