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
        if(OldProps.idDoctor != this.props.idDoctor){
            this.mostrarDetalles();
        }
    }


    render() {
        return (
            <div>
                <h1>Detalles doctor</h1>
                {
                    this.state.detallesDoctor.map((doct, index) => {
                        return (<div>
                            <h3 key={index}>{doct.apellido}</h3>
                            <h3 key={index}>{doct.especialidad}</h3>
                            <h3 key={index}>{doct.salario}</h3>
                            <h3 key={index}>{doct.idHospital}</h3>
                        </div>)
                    })
                }
            </div>
        )
    }
}
