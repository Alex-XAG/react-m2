import React from 'react';

export class FormLogin extends React.Component {
  state = {
    email: '',
    password: '',
    isChecked: false,
    gender: {
      male: true,
      female: false,
    },
  };

  handleChange = ({ target }) => {
    this.setState({
      [target.name]: target.value,
    });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    this.props.createUser({
      email: this.state.email,
      password: this.state.password,
    });
    this.setState({ email: '', password: '' });
    this.props.closeModal();
  };

  // handleCheck = () => {
  //   this.setState({ isChecked: !this.state.isChecked });
  // };

  handleCheck = ({ target: { checked } }) => {
    this.setState({ isChecked: checked });
  };

  handleRadio = ({ target }) => {
    console.log(target.value);
    this.setState({ gender: target.value });
  };

  render() {
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            name="email"
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={this.handleChange}
            value={this.state.email}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            name="password"
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            onChange={this.handleChange}
            value={this.state.password}
          />
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
            checked={this.state.isChecked}
            onChange={this.handleCheck}
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            I am agree
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
            checked={this.state.gender}
            onChange={this.handleRadio}
            value="male"
          />
          <label className="form-check-label" htmlFor="flexRadioDefault1">
            Male
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault2"
            checked={this.state.gender}
            onChange={this.handleRadio}
            value="female"
          />
          <label className="form-check-label" htmlFor="flexRadioDefault2">
            Female
          </label>
        </div>
        <button
          disabled={!this.state.isChecked}
          type="submit"
          className="btn btn-primary"
        >
          Submit
        </button>
      </form>
    );
  }
}