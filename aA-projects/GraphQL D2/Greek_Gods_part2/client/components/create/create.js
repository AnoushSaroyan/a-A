import React, { Component } from "react";
import GodCreate from "./GodCreate";
import AbodeCreate from "./AbodeCreate";
import EmblemCreate from "./EmblemCreate";
import { Link } from "react-router-dom";

class Create extends Component {
    constructor(props) {
        super(props);

        this.state = {
            createType: "god"
        };

        this.updateSelection = this.updateSelection.bind(this);
    }

    updateSelection(e) {
        e.preventDefault();
        this.setState({ createType: e.target.value });
    }

    render() {
        let form;
        let indexLink;

        if (this.state.createType === "god") {
            form = <GodCreate />;
            indexLink = <Link to="/gods">gods list</Link>;
        } else if (this.state.createType === "abode") {
            form = <AbodeCreate />;
            indexLink = <Link to="/abodes">abodes list</Link>
        } else if (this.state.createType === "emblem") {
            form = <EmblemCreate />;
            indexLink = <Link to="/emblems">emblems list</Link>
        }

        return (
            <div className="styled-select slate">
                <select onChange={this.updateSelection}>
                    <option value="god">God</option>
                    <option value="abode">Abode</option>
                    <option value="emblem">Emblem</option>
                </select>
                <h4>Create a new {this.state.createType}</h4>
                {form}
                {indexLink}
            </div>
        );
    }
}

export default Create;