import React, { Component } from 'react';
import '../assets/css/app.css';

import Form from "./form";
import Header from './header';
import Table from './table';


class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            students: []
        }
        console.log("props from app: ", props)
    }
    render() {
        return (
            <div className="container">
                <Header />
                <div className="row">
                    <Form user={this.state} />
                    <Table />
                </div>
            </div>
        );
    }
}

export default App;
