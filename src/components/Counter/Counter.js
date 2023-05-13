import React from 'react';

export class Counter extends React.Component {
  static defaultProps = {
    initialValue: 0,
  };

  static propTypes = {
    //
  };

  // state = { value: 5 }; //// Start
  state = { value: this.props.initialValue }; // initialValueBy props

  handleCLick = evt => {
    if (evt.target.classList.contains('increment')) {
      this.setState(prevState => ({
        value: prevState.value + 1,
      }));
    } else if (evt.target.classList.contains('decrement')) {
      this.setState(prevState => ({
        value: prevState.value - 1,
      }));
    } else {
      return;
    }
  };

  // handleIncrement = () =>
  //   this.setState(prevState => ({
  //     value: prevState.value + 1,
  //   }));

  // handleDecrement = () =>
  //   this.setState(prevState => ({
  //     value: prevState.value - 1,
  //   }));

  render() {
    const { value } = this.state;
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
        <span className="Counter__value">{value}</span>
        <div className="Counter__controls">
          <button
            type="button"
            className="counter-btn increment"
            onClick={this.handleCLick}
          >
            Increment + 1
          </button>
          <button
            type="button"
            className="counter-btn decrement"
            onClick={this.handleCLick}
          >
            Decrement - 1
          </button>
        </div>
      </div>
    );
  }
}

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

// ///////////////////
// handleIncrement = () => {
//   // this.state.value = 6; WRONG WRONG WRONG!!!!!!!!!!!!!!!!!!!!!!
//   // this.setState({
//   //   value: 10,
//   // }); ///////// Update without calculating//////////

//   this.setState(prevState => ({
//     value: prevState.value + 1,
//   }));
// };
