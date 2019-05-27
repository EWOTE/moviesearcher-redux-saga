import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../components/Header';

const mapStateToProps = state => {
  return {
    movies: state.items
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleInput: e => {
      dispatch({ type: 'INPUT_SEARCH_CHANGED', query: e });
    }
  };
};

const HeaderContainer = ({ title, handleInput }) => {
  return <Header title={title} handleInput={handleInput} />;
};

HeaderContainer.propTypes = {
  title: PropTypes.string.isRequired,
  handleInput: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderContainer);
