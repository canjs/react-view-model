import QUnit from 'steal-qunit';
import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import { connect } from '../dist/production/ylem';
import { Object as ObserveObject } from 'can-observe';

class MyComponent extends Component {
	render () {
		return <div />;
	}
}

export class ViewModel extends ObserveObject {
	constructor () {
		super();
		setTimeout(() => {
			// Setting this synchronously fixes the problem
			this.items = [{text: 'Hello'}];
		}, 0);
	}
	foo () {}
  items = []
}

@connect(ViewModel)
export default class AppComponent extends Component {
	render () {
		const {
			items,
			// eslint-disable-next-line no-unused-vars
			foo
		} = this.props;

		// Casting this to an Array fixes the problem
		return items.map((item, key) => (
			// Changing this to a plain div fixes the problem
			<MyComponent key={key} />
		));
	}
}

QUnit.module('nested component ObserveArray', () => {
	QUnit.test('does not render forever', (assert) => {
		const div = document.createElement('div');

		ReactDOM.render(<AppComponent />, div);

		assert.equal(div.innerHTML, '<div></div>');
	});
});
