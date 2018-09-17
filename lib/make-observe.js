import React from 'react';
import makeObserve from 'can-observe/src/-make-observe';

const observe = makeObserve.observe;

makeObserve.observe = function(input) {
	if (React.isValidElement(input)) {
		return input;
	}
	return observe(input);
};