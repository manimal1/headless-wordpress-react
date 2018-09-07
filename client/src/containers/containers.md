# 1. Containers

Containers should:
- maintain the application state based on user interaction
- be in control of rendering and re-rendering on a larger scale
- pass props and configuration to children to maintain state

Containers Should Not:
- Apply styles or visual changes to the application

They should purely handle the flow of data and re-rendering

like...
```js
class myContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return {
      <div></div>
    )
  }
}

connect... with redux
```