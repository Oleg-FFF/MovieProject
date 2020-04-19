import React, {Component} from "react";
import './Header.css';
import best_movies_logo_light_FDF9F9 from '../../Images/best_movies_logo_light_FDF9F9.png'

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
            <div className={`${CN}`}>
                <img src={best_movies_logo_light_FDF9F9} alt='logo' className={`${CN} logo`} />
            </div>
        )
    }
};
