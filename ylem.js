import namespace from 'can-namespace';
import { Object, Array } from 'can-observe';

import connect from './connect';
const withViewModel = connect;

namespace.reactViewModel = {
	connect,
	withViewModel,
};

export {
	connect,
	withViewModel,
	Object,
	Array,
};
