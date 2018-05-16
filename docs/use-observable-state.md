## Observable State

The easiest way to use **ylem** is to extend `ylem.Component`. This allows you to set state directly and forget about `setState`, `shouldComponentUpdate`, and `PureComponent`.

```js
import React from 'react';
import ylem from 'ylem';

class Clock extends ylem.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(() => {
      // Set state directly
      this.state.date = new Date();
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    const { date } = this.state;
    return (
      <h2>
        It is {date.toLocaleTimeString()}.
      </h2>
    );
  }
}
```

## ViewModel Classes

As your app grows in complexity, we recommend defining ViewModels for managing state and interactions. Simple ES classes can be used to isolate code in a reusable and testable manner:

```js
// ViewModel.js
class ViewModel {
  constructor({ offset, limit, count }) {
    this.count = count || Infinity;
    this.offset = offset || 0;
    this.limit = limit || 10;
  }

  set offset(newOffset) {
    this._offset = Math.max(
      0,
      Math.min(
        isNaN(this.count - 1) ? Infinity:  this.count - 1,
        newOffset
      )
    );
  }
  
  get offset() {
    return this._offset;
  }

  next = () => this.offset += this.limit;
  prev = () => this.offset -= this.limit;
}

export default ViewModel;
```

Use the ViewModel to create your state:

```
// Component.js
import React from 'react';
import ylem from 'ylem';
import ViewModel from './ViewModel';

class App extends ylem.Component {
  constructor(props) {
    super(props);

    this.state = new ViewModel({
      offset: 20,
      limit: 10,
    });
  }

  render() {
    return (
      <div>
        <NextPrev paginate={this.state} />
        <Grid paginate={this.state} />
      </div>
    );
  }
}
```

Then the NextPrev component might look like:

```js
const NextPrev = ({ next }) =>
  <div>
    <button onClick={next}>NEXT<button>
    <button onClick={prev}>PREV<button>
  </div>
}
```

Next: [Higher Order Components](./use-higher-order-components.md)
