import './Account.css';

import React from 'react';

class Account extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurantName: "",
      address: "",
      name: "",
      lastName: "",
      email: "",
      password: ""
    };


    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div className="main_container">
        <div className="outline">
          <div className="container">
            <form onSubmit={this.handleSubmit}>
              <div className="textBoxContainer">
                <input
                  className="textBox"
                  name="restaurantName"
                  placeholder="Nombre de restaurante"
                  type="text"
                  value={this.state.restaurantName}
                  onChange={this.handleChange} />
              </div>
              <div className="textBoxContainer">
                <input
                  className="textBox"
                  name="address"
                  placeholder="Dirección"
                  type="text"
                  value={this.state.address}
                  onChange={this.handleChange} />
              </div>
              <div className="textBoxContainer">
                <input
                  style={{ float: "left" }}
                  className="doubleTextBox"
                  name="name"
                  placeholder="Nombre"
                  type="text"
                  value={this.state.name}
                  onChange={this.handleChange} />
                <input
                  style={{ float: "right" }}

                  className="doubleTextBox"
                  name="lastName"
                  placeholder="Apellido"
                  type="text"
                  value={this.state.lastName}
                  onChange={this.handleChange} />
              </div>
              <div className="textBoxContainer">
                <input
                  style={{ float: "left" }}
                  className="doubleTextBox"
                  name="email"
                  placeholder="Correo electrónico"
                  type="text"
                  value={this.state.email}
                  onChange={this.handleChange} />
                <input
                  style={{ float: "right" }}
                  className="doubleTextBox"
                  name="password"
                  placeholder="Contraseña"
                  type="text"
                  value={this.state.value}
                  onChange={this.handleChange} />
              </div>
              <div className="buttonContainer">
                <input className="button" type="submit" value="Registrar" />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}


export default Account;
