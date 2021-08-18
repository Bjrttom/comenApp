import './ModifyAccount.css';

import React from 'react';

class ModifyAccount extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            restaurantName: "Fontanar",
            address: "Calle 145 # 79-85",
            name: "Carlos",
            lastName: "Suarez",
            email: "Fontanar@gmail.com",
            password: "",
            limitTime: 15,
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
                                    style={{ color: "red" }}
                                    readOnly
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
                                    style={{ float: "left", color: "red" }}
                                    readOnly
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
                            <div className="textBoxContainer">
                                <select value={this.props.is_expenditure}
                                    onChange={this.handleChange}
                                    style={{ float: "left" }}
                                    className="doubleTextBox"
                                >
                                    <option defaultValue>Categoria</option>
                                    <option value="1">Americana</option>
                                    <option value="2">China</option>
                                </select>
                                <div>
                                    <input
                                        style={{ float: "right" }}
                                        min="1"
                                        max="60"
                                        className="timeLimit"
                                        name="limitTime"
                                        type="number"
                                        value={this.state.limitTime}
                                        onChange={this.handleChange} />
                                    <div>
                                        <label style={{ color: "white", float: "right" }} >
                                            Tiempo limite de<br></br> reservación
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="textBoxContainer">
                                <label style={{ color: "white", float: "left", paddingTop: "10px", paddingRight: "15px" }} >
                                    Horario
                                </label>
                                <input
                                    style={{ float: "left" }}
                                    type="time"
                                    step="1"
                                    value={this.state.time}
                                    className="doubleTextBox"
                                    placeholder="Time" />
                                <label style={{ float: "left", paddingTop: "10px", paddingRight: "50px" }} >
                                </label>

                                <input
                                    style={{ float: "left" }}
                                    type="time"
                                    step="1"
                                    value={this.state.time}
                                    className="doubleTextBox"
                                    placeholder="Time" />

                            </div>
                            <div className="buttonContainer">
                                <input className="button" type="submit" value="Actualizar" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}


export default ModifyAccount;
