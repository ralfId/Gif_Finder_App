import React, { useState } from "react";
import PropTypes from 'prop-types'


export const AddCategory = ({setCategory}) => {
  const [inputValue, setInputValue] = useState('');

  const handleOnChangeInput = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) =>{
      e.preventDefault();
      console.log('handleSubmit', inputValue);
      if ( inputValue.trim().length > 2 ) {
        setCategory(catg => [inputValue, ...catg] );
      }
      setInputValue('');
  };

  return (
    <form onSubmit={handleSubmit}>
        <p>{inputValue}</p>
        <input onChange={handleOnChangeInput} value={ inputValue } type="text" />

    </form>
  );
};

AddCategory.propTypes = {
    setCategory: PropTypes.func.isRequired
}
