var each = require("can-util/js/each/each");
var DefineMap = require("can-define/map/map");

module.exports = function bindMethods(ViewModel) {
	var setup = ViewModel.prototype.setup;

	ViewModel.prototype.setup = function () {
		var methods = getMethods(ViewModel.prototype, {});
		for (var key in methods) {
			this[key] = methods[key].bind(this);
		}
		// call original setup
		return setup.apply(this, arguments);
	};
};

function getMethods(proto, methods) {
	if (proto && proto !== Object.prototype && proto !== DefineMap.prototype) {
		each(proto._define.methods, function (property, key) {
			if (typeof property === 'function' && key !== 'constructor' && key !== 'setup') {
				methods[key] = property;
			}
		});
		return getMethods(Object.getPrototypeOf(proto), methods);
	}
	return methods;
}