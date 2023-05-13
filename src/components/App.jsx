import React from 'react';
import { Counter } from './Counter/Counter';
import { Header } from './Header/Header';
import { Modal } from './Modal/Modal';

export class App extends React.Component {
  state = {
    isShowModal: false,
  };

  showModal = () => {
    this.setState({ isShowModal: true });
  };
  closeModal = () => {
    // if (evt.code === 'Escape') {
    //   this.setState({ isShowModal: false });
    // }

    this.setState({ isShowModal: false });
  };

  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <Header showModal={this.showModal} />

        {this.state.isShowModal && (
          <Modal closeModal={this.closeModal}>Some</Modal>
        )}

        <h1>State of component</h1>

        <Counter />
      </div>
    );
  }
}

// const colorPickerOptions = [
//   { label: 'red', color: '#F44336' },
//   { label: 'green', color: '#4CAF50' },
//   { label: 'blue', color: '#2196F3' },
//   { label: 'grey', color: '#607D8B' },
//   { label: 'pink', color: '#E91E63' },
//   { label: 'indigo', color: '#3F51B5' },
// ];
