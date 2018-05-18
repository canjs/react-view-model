import namespace from 'can-namespace';
import { Object as ViewModel, Array as ModelList} from 'can-observe';

import connect from './connect';
import Component from './component';
import createViewModelComponent from './create-view-model-component';

namespace.ylem = {
	connect,
	withViewModel: connect,
	Component,
	ViewModel,
	ModelList,
	createViewModelComponent,
};

export default namespace.ylem;
export {
	connect,
	connect as withViewModel,
	Component,
	ViewModel,
	ModelList,
	createViewModelComponent,
};
