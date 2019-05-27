// WIP
import React from 'react';

import Select, { components } from 'react-select';
import { connect } from 'react-redux';
import { Link } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';
import * as selectors from '../reducers/selectors';

const mapStateToProps = state => {
  return {
    value: selectors.getValue(state),
    options: selectors.getOptions(state),
    isLoading: selectors.isLoading(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleInput: query => {
      dispatch({ type: 'INPUT_SEARCH_CHANGED', query });
    }
  };
};

const customStyles = {
  option: (provided, state) => ({
    ...provided,
    borderBottom: '1px dotted pink',
    color: state.isSelected ? 'red' : 'blue'
  }),

  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = 'opacity 300ms';

    return { ...provided, opacity, transition };
  }
};

const Option = props => {
  return (
    <Link
      component={RouterLink}
      to={`/movies/${props.data.value}`}
      style={{ borderBottom: 'none' }}
    >
      <components.Option {...props} />
    </Link>
  );
};

const SelectContainer = ({ value = '', options = [], handleInput }) => {
  return (
    <Select
      placeholder="Название фильма"
      isClearable
      escapeClearsValue
      options={options}
      components={{ Option }}
      onInputChange={query => handleInput(query)}
      styles={customStyles}
    />
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectContainer);
