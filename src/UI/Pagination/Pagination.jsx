import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import PropTypes from 'prop-types'
import { getPage } from "../../redux/transactions/transactions-selectors";
import { useSelector, useDispatch } from 'react-redux';
import { paginationTransaction } from "../../redux/transactions/transactions-slice";

const useStyles = makeStyles((theme) => ({
    root: {
      marginTop: '20px',
    '& > *': {
      // marginTop: theme.spacing(2),
      minWidth: '20px',
    },
  },
  ul: {
    display: 'flex',
    justifyContent: 'center',
  }

}));

const TransactionPagination = ({ totalPages }) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const page = Number(useSelector(getPage));
    
    const pageSwitch = (e, value) => {
        dispatch(paginationTransaction(value));
    };
  
    return (
        <div className={classes.root}>
            <Pagination className={classes.ul}
                size="small"
                page={page}
                color="primary"
                count={Number(totalPages)}
                shape="rounded"
                onChange={pageSwitch}
            />
        </div>
    );
};

TransactionPagination.propTypes = {
  totalPage: PropTypes.node,
}

export default TransactionPagination;