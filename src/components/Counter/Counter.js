import React from 'react';

export class Counter extends React.Component {
  // ///////////////  work with events////////////
  //   handleIncrement = evt => {
  //     console.log('Clicked on Increment');
  //     // console.log(evt);
  //     const target = evt.target;

  //     setTimeout(() => {
  //       console.log(target); // evt.target
  //     }, 1000);
  //   };

  //   handleDecrement = evt => {
  //     console.log('Clicked on Decrement');
  //     console.log(evt);
  //     console.log(evt.target);
  //   };

  //   /////////////// Old school constructor /////////////////
  //   constructor() {
  //     super();

  //     this.state = {
  //       value: 5,
  //     };
  //   }         //////////////////
  //  /////////// Useble code - just public property ////////////

  //   state = { value: 5 }; //// Start

  static defaultProps = {
    initialValue: 0,
  };

  static propTypes = {
    //
  };

  state = { value: this.props.initialValue }; // initialValueBy props

  handleIncrement = () => {
    // this.state.value = 6; WRONG WRONG WRONG!!!!!!!!!!!!!!!!!!!!!!
    // this.setState({
    //   value: 10,
    // }); ///////// Update without calculating//////////

    this.setState(prevState => ({
      value: prevState.value + 1,
    }));
  };

  handleDecrement = () => {
    this.setState(prevState => ({
      value: prevState.value - 1,
    }));
  };

  render() {
    return (
      <div
        className="Counter"
        style={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <span className="Counter__value">{this.state.value}</span>
        <div className="Counter__controls">
          <button type="button" onClick={this.handleIncrement}>
            Increment + 1
          </button>
          <button type="button" onClick={this.handleDecrement}>
            Decrement - 1
          </button>
        </div>
      </div>
    );
  }
}
