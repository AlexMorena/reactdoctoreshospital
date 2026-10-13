import React, { Component } from 'react';
import axios from 'axios';
import Global from '../Global';
import DetallesDoctor from './DetallesDoctor';

export default class DoctoresComponent extends Component {

    url = Global.urlApiDoctores;
    state = {
        doctores: []
    }

    cargarDoctores = () => {
        let request = "api/doctores/doctoreshospital/" + this.props.idhospital;
        axios.get(this.url + request).then((response) => {
            this.setState({
                doctores: response.data
            })
        })
    }

    componentDidMount = () => {
        this.cargarDoctores();
    }

    componentDidUpdate = (oldProps) => {
        if (oldProps.idhospital != this.props.idhospital) {
            this.cargarDoctores();
        }
    }

    render() {
        return (
            <div>
                <h1>Doctores del hospital {this.props.idhospital}</h1>
                <DetallesDoctor />
                <table className='table table-primary'>
                    <thead>
                        <tr>
                            <th>Apellido</th>
                            <th>Especialidad</th>
                            <th>Salario</th>
                            <th>Hospital</th>
                            <th>Ver detalles</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.doctores.map((doct, index) => {
                                return (
                                    <tr>
                                        <td key={index} idDoctor={doct.idDoctor}>{doct.apellido}</td>
                                        <td key={index} idDoctor={doct.idDoctor}>{doct.especialidad}</td>
                                        <td key={index} idDoctor={doct.idDoctor}>{doct.salario}</td>
                                        <td key={index} idDoctor={doct.idDoctor}>{doct.idHospital}</td>
                                        <td><button>Observar Detalles</button></td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}
