import React, {Component} from "react";
import {user} from '../../Constants/Constants'
import './Header.scss';
import best_movies_logo_light_FDF9F9 from '../../Images/best_movies_logo_light_FDF9F9.png';
import best_movies_logo_dark_252A37 from '../../Images/best_movies_logo_dark_252A37.png'

const CN = "header";

export class Header extends Component {
    constructor(props) {
        super(props);
        console.log(props)
    }



    render() {
        const { changeTheme } = this.props.actions;
        const { darkTheme } = this.props.header;
        return (
            <div className={darkTheme ? `${CN} dark` : `${CN}`}>
                <img src={darkTheme ? best_movies_logo_dark_252A37 : best_movies_logo_light_FDF9F9 } alt='logo' className={`${CN} logo`} />
                <div className={darkTheme ? `${CN} middle dark` : `${CN} middle`}></div>
                <div className={darkTheme ? `${CN} user-info dark` : `${CN} user-info`}></div>
                <div className={darkTheme ? `${CN} toggle-theme dark` : `${CN} toggle-theme`}>
                    <input className="tgl tgl-ios" id="cb2" type="checkbox" onClick={changeTheme}/>
                    <label className="tgl-btn" htmlFor="cb2" ></label>
                    <div className={darkTheme ? `${CN} theme dark` : `${CN} theme`}>{darkTheme ? `Light Theme` : `Dark Theme`}</div>
                </div>
            </div>
        )
    }
};
