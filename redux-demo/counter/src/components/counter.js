

export dafault class Counter extends Component{
  constructor(props){
    super(props);

  }
  render(){
    return(
      <div>
        <p>
          Clicked: <span id="value">{this.props.value}</span> times
          <button id="increment" onClick={this.props.onIncrement}>+</button>
          <button id="decrement" onClick={this.props.onDecrement}>-</button>
          <button id="incrementIfOdd">Increment if odd</button>
          <button id="incrementAsync">Increment async</button>
        </p>
      </div>
    )
  }
}
