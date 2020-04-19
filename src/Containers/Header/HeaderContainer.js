import{ connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter} from 'react-router';
import {Header as HeaderComponent} from './Header';
import {increment, decrement, logToggle, changeTheme} from '../../Actions/MoviesActions'


const mapStateToProps = (state) => {
    return {
        header: state.header,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: {
            increment: () => dispatch(increment()),
            decrement: () => dispatch(decrement()),
            logToggle: () => dispatch(logToggle()),
            changeTheme: () => dispatch(changeTheme())
        }
    }
};

export const Header = connect(mapStateToProps, mapDispatchToProps)(HeaderComponent);

