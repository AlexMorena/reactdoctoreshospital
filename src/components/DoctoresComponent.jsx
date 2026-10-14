import React, { Component } from 'react';
import axios from 'axios';
import Global from '../Global';
import DetallesDoctor from './DetallesDoctor';
import ServiceHospitales from '../services/ServiceHospitales';

export default class DoctoresComponent extends Component {

    service = new ServiceHospitales();

    url = Global.urlApiDoctores;
    state = {
        doctores: [],
        idDoctor: ""
    }

    cargarDoctores = () => {
        this.service.getDoctoresHospital(this.props.idhospital).then((result => {
            this.setState({
                doctores: result
            })
        }))
    }

    componentDidMount = () => {
        this.cargarDoctores();
    }

    componentDidUpdate = (oldProps) => {
        if (oldProps.idhospital != this.props.idhospital) {
            this.cargarDoctores();

            this.setState({
                idDoctor: "" //Lo devuelvo a "" para quitarlo cuando marquemos un nuevo hospital
            });
        }
    }

    render() {
        return (
            <div>
                <h1>Doctores del hospital {this.props.idhospital}</h1>
                {
                    this.state.idDoctor != "" && (
                        <DetallesDoctor idDoctor={this.state.idDoctor} />
                    )
                }
                <h3>Doctores</h3>
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
                                    <tr key={index}>
                                        <td idDoctor={doct.idDoctor}>{doct.apellido}</td>
                                        <td idDoctor={doct.idDoctor}>{doct.especialidad}</td>
                                        <td idDoctor={doct.idDoctor}>{doct.salario}</td>
                                        <td idDoctor={doct.idDoctor}>{doct.idHospital}</td>
                                        <td><button onClick={() => {
                                            this.setState({
                                                idDoctor: doct.idDoctor
                                            })
                                        }}>Observar Detalles</button></td>
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
