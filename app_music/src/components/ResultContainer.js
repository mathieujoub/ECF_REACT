import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import ResultVue from './ResultVue';
import Load from "./Load";


class ResultContainer extends Component {
    render() {
        return ( 
            <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th>#</th>
                <th>Artiste</th>
                <th>Title</th>
                <th>Album</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <ResultVue/>
            </tbody>
            <Load/> 
          </Table>
        );
    }
}


export default ResultContainer;