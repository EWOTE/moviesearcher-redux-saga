import React from 'react';
import Paginate from 'react-paginate';
import { makeStyles } from '@material-ui/styles';
import { connect } from 'react-redux';

const mapDispatchToProps = dispatch => {
  return {
    changePageNumber: page => dispatch({ type: 'CHANGE_PAGE_NUMBER', page })
  };
};

const useStyles = makeStyles({
  root: {
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
    listStyleType: 'none'
  },
  button: {
    margin: '0 5px',
    padding: '2px 4px',
    borderRadius: '5px',
    cursor: 'pointer',
    background: '#3f51b5',
    color: '#FFF',
    '&:hover': {
      background: '#303f9f'
    },
    transition:
      'background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms'
  },
  link: {
    padding: '8px 16px'
  },
  buttonDisabled: {
    color: 'rgba(255, 255, 255, 0.3)',
    padding: '0 15px',
    '&:hover': {
      background: 'rgba(255, 255, 255, 0.12)'
    },
    boxShadow: 'none',
    backgroundColor: 'rgba(255, 255, 255, 0.12)'
  }
});

const Pagination = ({ pageCount, changePageNumber, currentPage }) => {
  const classes = useStyles();
  return (
    <>
      <Paginate
        previousLabel="<"
        nextLabel=">"
        breakLabel="..."
        forcePage={currentPage - 1}
        pageCount={pageCount}
        pageClassName={classes.button}
        previousClassName={classes.button}
        disabledClassName={classes.buttonDisabled}
        pageLinkClassName={classes.link}
        nextClassName={classes.button}
        nextLinkClassName={classes.button}
        breakLinkClassName={classes.button}
        pageRangeDisplayed={9}
        marginPagesDisplayed={2}
        disableInitialCallback
        containerClassName={classes.root}
        onPageChange={({ selected }) => changePageNumber(selected + 1)}
        breakClassName={classes.button}
      />
    </>
  );
};

export default connect(
  null,
  mapDispatchToProps
)(Pagination);
