import React, { Component } from 'react';
import ServiceHospitales from '../services/ServiceHospitales';
import Global from '../Global';


export default class HospitalesComponent extends Component {
    service = new ServiceHospitales();
    state = {
        hospitales: []
    }
    cargarHospitales = () => {
        this.service.getHospitales().then(result => {
            this.setState({
                hospitales: result
            })
        })
    }


    componentDidMount = () => {
        this.cargarHospitales();
    }

    render() {
        return (
            <div>
                <h1>Hospitales Component</h1>
                <table className='table table-primary'>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Nombre</th>
                            <th>Direccion</th>
                            <th>Telefono</th>
                            <th>Camas</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.hospitales.map((hosp, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{hosp.idHospital}</td>
                                        <td>{hosp.nombre}</td>
                                        <td>{hosp.direccion}</td>
                                        <td>{hosp.telefono}</td>
                                        <td>{hosp.camas}</td>
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
