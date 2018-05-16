## 💡 Easy for developers of all skill levels to understand. 💡

**ylem** enables the use of simple object-oriented patterns that developers already understand. There are no APIs to learn for updating state - you can simply set properties and modify arrays exactly like you would in plain JavaScript:

```
state.todos.push({ title: 'Dishes', complete: false });
state.todos[0].complete = true;
state.count++;
```

### How ylem works

**yelm** is "observing" your state and will automatically re-render your components when anything changes - you should never call `setState`. More importantly, **ylem** only re-renders your components when something _actually_ changes. This means you never have to implement `shouldComponentUpdate` or use `PureComponent`. Humans can never implement `shouldComponentUpdate` across an entire app as efficiently as a code solution like **ylem** . This alone will save your team hours of time while increasing your apps rendering efficiency (for free - keep reading).

## 💆 Removes boilerplate 💆

In the real world many components operate on the same state. With plain react you generally pass callbacks around which eventually call `setState`. With tools like Redux you use actions and reducers which introduce "conventions" and separation of code in a way that feels unnatural. This distribution of state logic makes it cumbersome to setup complex lines of communication across multiple components. 

Lets say we have a simple paginated grid. It is immediately obvious how much less code is required with **ylem**:

<table>
<tr><th>React</th><th>ylem</th></tr>
<tr>
<td>

With React alone, you might build your app like this:

</td>
<td>

Instead of all the boilerplate, you can simply pass state:

</td>
</tr>
<tr>
<td>

```js
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      limit: 10,
      offset: 20,
      count: 300
    };
  }

  setLimit = (limit) => {
    this.setState({ limit });
  }

  setOffset = (offset) => {
    this.setState({ offset });
  }

  render() {
    const { limit, offset, count } = this.state;

    return (
      <div>
        <NextPrev
          limit={limit}
          offset={offset}
          count={count}
          setOffset={this.setOffset}
        />
        <Grid
          limit={limit}
          offset={offset}
          count={count}
          setLimit={this.setLimit}
        />
      </div>
    );
  }
}
```

</td>
<td>

```js
class App extends ylem.Component {
  constructor(props) {
    super(props);
    this.state = {
      limit: 10,
      offset: 20,
      count: 300
    };
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

</td>
</tr>
<tr>
<td>

The NextPrev component might look like this:

</td>
<td>

Now the NextPrev component can set state directly:

</td>
</tr>
<tr>
<td>

```js
const NextPrev = ({ limit, offset, setOffset }) =>
  <div>
    <button onClick={() =>
      setOffset( offset + limit );
    }>NEXT<button>
    <button onClick={() =>
      setOffset( offset - limit );
    }>PREV<button>
  </div>
};
```

</td>
<td>

```js
const NextPrev = ({ paginate }) =>
  <div>
    <button onClick={() =>
      paginate.offset = ( paginate.offset + paginate.limit )
    }>NEXT<button>
    <button onClick={() =>
      paginate.offset = ( paginate.offset - paginate.limit )
    }>NEXT<button>
  </div>
};
```

</td>
</tr>
</table>


## 🔥 Less Time Rendering 🔥

In the example above, the `offset` and `limit` properties are being **read and updated by child components only**. The App component does not care about the values for offset/limit or the logic for updating those values. However, every time those values change, the plain react example must re-render the App and its children. With **ylem**, only the child components are re-rendered - meaning 33% less rendering with a simple paginated grid. Hopefully it is obvious how fewer renders would improve the efficiency of a larger application.

> **Note:** The plain react example could be implemented several different ways - but that only introduces more "convention" and developer decision making which eventually compromises the stability and consistency of your app.

Next: [Get Started with StealJS](./getting-started-steal.md) or [Get Started with Webpack](./getting-started-webpack.md)
