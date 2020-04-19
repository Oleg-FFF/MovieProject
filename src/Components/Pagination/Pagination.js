import React, {Component} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import './Pagination.css'

const CN = 'pagination';


export const PaginationComponent = (props) => {

        const useStyles = makeStyles((theme) => ({
            root: {
                '& > *': {
                    marginTop: theme.spacing(0),
                },
            },
        }));

        const {totalPages, currentPage, setPage} = props;
        const classes = useStyles();
        const handleChange = (event, value) => {
            console.log(value)
        setPage(value);
    };

        return (
            <div className={`${CN}`}>
                <div className={`${classes.root} pagination-cont`}>
                    <Pagination count={totalPages} variant="outlined" shape="rounded" page={currentPage} onChange={handleChange} />
                </div>
            </div>
        );
}

