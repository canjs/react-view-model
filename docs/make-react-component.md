@function react-view-models.makeReactComponent makeReactComponent
@parent react-view-models 2

@description creates a React Component out of a Can Component


@signature `makeReactComponent( displayName, CanComponent )`

Convert a CanComponent class into a React Component.

`makeReactComponent()` takes 2 arguments. The first (optional) is the displayName of the ReactComponent. The second argument is a CanComponent constructor function. The `makeReactComponent()` function returns a React Component which can then be imported and used in any react component or render function as usual.

Since the Component doesn't produce DOM artifacts of it’s own, you won’t end up with any wrapper divs or anything to worry about, but in react-device-tools you will see the component with the `displayName` (or defaults to `CanComponentWrapper`) in the tree.

```javascript
export default makeReactComponent( 'AppComponent', CanComponent.extend({ ... }) )
```

@param {String} displayName The name of the created component
@param {CanComponent} CanComponent Any Can component

@return {ReactComponent} A React component