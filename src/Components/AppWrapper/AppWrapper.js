import {Provider} from "react-redux";
import {Counter} from "../../Containers/Counter/CounterContainer";
import {MoviesPage} from "../../Containers/HomePage/MoviesPageContainer";
import React from "react";
import {store} from '../../store/Store'
import {Badge} from "reactstrap";
import './AppWrapper.css'

export function AppWrapper() {
    return (
        <Provider store={store}>
            <Badge color='primary'>HHHH</Badge>
            <Counter />
            <div className="movie-container">
                <MoviesPage />
            </div>
        </Provider>
    );
}

export default AppWrapper;
