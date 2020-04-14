import React, {Component} from "react";
import './Header.css'

const CN = "header";

export class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
        };

    }

    // const { movieItem } = this.props;

    render() {
        return (
            <div className={`${CN}`}>Header</div>
        )
    }
};
