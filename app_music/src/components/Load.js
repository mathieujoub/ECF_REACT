import React, { Component } from 'react';
import {MDBIcon} from "mdbreact";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';


class Load extends Component {
    render(){
        return (
            <MDBIcon icon="spinner" spin size="3x" fixed /> 
        );
    }
}

export default Load;