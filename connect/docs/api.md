# API

- `ylem()`
    - `ylem(Component)` -> returns an observer component (useful for making more efficient renders)
    - `ylem(VM, Component)` -> return and enhanced component
    - `ylem(VM, Component, opts)` -> return and enhanced component (options include the `mapProps` function)
    - `ylem(VM)(Component)` -> if no component is provided it returns a function that accepts a component
    - `ylem(VM, opts)(Component)` -> same as above but with options
- `ObserverObject`
	- `.listenTo`
	- ObserveObject Decorators
		- `@async`
		- `@resolver`
- `ObserveArray`
- `connect(ObservableClass)` alias `withViewModel`
- `createComponent(ObservableClass)`
- `observer(Component)`
