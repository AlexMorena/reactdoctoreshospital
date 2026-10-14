import axios from 'axios';
import React, { Component } from 'react';
import Global from '../Global';

export default class DetallesDoctor extends Component {
    url = Global.urlApiDoctores;
    state = {
        detallesDoctor: []
    }
    mostrarDetalles = () => {
        let request = "api/doctores/";
        let id = this.props.idDoctor;
        console.log(id);

        if (id) {
            axios.get(this.url + request + id).then((response) => {
                this.setState({
                    detallesDoctor: response.data
                })
            })
        }
    }

    componentDidMount = () => {
        this.mostrarDetalles();
    }

    componentDidUpdate = (OldProps) => {
        if (OldProps.idDoctor != this.props.idDoctor) {
            this.mostrarDetalles();
        }
    }


    render() {
        return (
            <div>
                <h3>Detalles doctor</h3>
                {
                        <div style={{ backgroundColor: "lightblue" }}>
                            <h3>Apellido: {this.state.detallesDoctor.apellido}</h3>
                            <h3>Salario: {this.state.detallesDoctor.salario}</h3>
                            <h3>Especialidad: {this.state.detallesDoctor.especialidad}</h3>
                            <h3>ID Hospital: {this.state.detallesDoctor.idHospital}</h3>
                        </div>
                }
            </div>
        )
    }
}
