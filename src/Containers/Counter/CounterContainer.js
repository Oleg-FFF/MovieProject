import{ connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter} from 'react-router';
import {Counter as CounterComponent} from './Counter';
import {increment, decrement, logToggle} from '../../Actions/MoviesActions'


const mapStateToProps = (state) => {
    console.log(state);
    const {counter} = state;
    return {
        counter,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: {
            increment: () => dispatch(increment()),
            decrement: () => dispatch(decrement()),
            logToggle: () => dispatch(logToggle())
        }
    }
};

export const Counter = connect(mapStateToProps, mapDispatchToProps)(CounterComponent);

