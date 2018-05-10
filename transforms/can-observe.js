import canObserve from 'can-observe';

export default {
	test: (config) => typeof config === 'function' && config.prototype instanceof canObserve.Object,
	createViewModel(ViewModel, props) {
		return Object.assign(new ViewModel(), props);
	},
	updateViewModel(viewModel, nextProps) {
		// debugger;
		Object.assign(viewModel, nextProps);
	},
	getPropTypes(config) {
		return config.propTypes;
	},
};
