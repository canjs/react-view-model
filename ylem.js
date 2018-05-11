import namespace from 'can-namespace';
import { Object, Array } from 'can-observe';

import connect from './connect';
import Component from './component';
import { createViewModelComponent } from './create-view-model-component';
const withViewModel = connect;

namespace.reactViewModel = {
	connect,
	withViewModel,
	Component,
	createViewModelComponent,
};

export {
	connect,
	withViewModel,
	Component,
	Object,
	Array,
	createViewModelComponent
};
