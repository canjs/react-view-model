## Usage with Recompose

[Recompose](https://github.com/acdlite/recompose) is a React utility belt for function components and higher-order components (HoCs). Think of it like lodash for React. HoCs are functions that accept a base component and return a new component with additional functionality. They can be used to abstract common tasks into reusable pieces. Recompose provides a toolkit of helper functions for creating higher-order components.

Ylem provides a `withViewModel` method (which is really just an alias of `connect`) which works seamlessly with recompose. This can be used to create mixin functionalities for applying to your components.

```js
const { compose } = Recompose;

class ToggleStore extends ObserveObject {
  visible = false

  toggleVisible = () => {
    this.visible = !this.visible;
  }
}

const withToggle = () => withViewModel(ToggleStore);

const enhance = compose(
  withToggle(),
);

const EnhancedComponent = enhance(({ visible, toggleVisible }) => (
  <div onClick={toggleVisible}>
    { visible ? 'show' : 'hide' }
  </div>
));
```
