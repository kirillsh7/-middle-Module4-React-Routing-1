import React, { Suspense } from 'react'

const ComponentName = (name, url) => {
	return React.lazy(
		() => import(/* @vite-ignore */ url)
			.then(module => {
				const component = module[name]
				return { default: component }
			}
			))
}
export const Component = (props) => {

	const Component = ComponentName(props.name, props.url)

	return (
		<Suspense fallback={<div>Loading...</div>}>
			<Component {...props} />
		</Suspense>
	)
}
