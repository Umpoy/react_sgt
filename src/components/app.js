import React, { Component } from 'react';
import '../assets/css/app.css';

import Form from "./form";
import Header from './header';
import Table from './table';


class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            students: [{
                name: "Ian",
                course: "Swaggness101",
                grade: "100"
            },
            {
                name: "Ian",
                course: "Swaggness102",
                grade: "100"
            }],
        }
        console.log("props from app: ", this.state)
    }
    render() {
        return (
            <div className="container">
                <Header />
                <div className="row">
                    <Form value={this.state} />
                    <Table value={this.state} />
                </div>
            </div>
        );
    }
}

export default App;
