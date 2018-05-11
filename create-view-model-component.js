import React from 'react';
import { createNewComponentClass } from './observable-component';

const isEmptyChildren = (children: any): boolean =>
	React.Children.count(children) === 0;

export function createViewModelComponent( ViewModelClass ) {
	const ViewModelComponent = createNewComponentClass(
		ViewModelClass,
		props => props,
		(viewModel, { component, render, children }) => {
			return component
				? React.createElement(component, viewModel)
				: render
					? render(viewModel)
					: children // children come last, always called
						? typeof children === 'function'
							? children(viewModel)
							: !isEmptyChildren(children) ? React.Children.only(children)
								: null
						: null;
		}
	);

	return ViewModelComponent;
}
