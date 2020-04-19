import {Provider} from "react-redux";
import {Counter} from "../../Containers/Header/HeaderContainer";
import {HomePage} from "../../Containers/HomePage/HomePageContainer";
import React from "react";
import {store} from '../../store/Store'
import {Badge} from "reactstrap";
import './AppWrapper.css'

export function AppWrapper() {
    debugger
    return (
        <Provider store={store}>
            <div className="global-container">
                <HomePage />
            </div>
        </Provider>
    );
}

export default AppWrapper;
