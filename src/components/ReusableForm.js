import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type='text'
          name='names'
          placeholder='Item Name' />
        <br></br>
        <input
          type='text'
          name='origin'
          placeholder='Item Origin' />
        <br></br>
        <input
          type='text'
          name='price'
          placeholder='Item Price' />
        <br></br>
        <input
          type='text'
          name='roast'
          placeholder='Item Roast' />
        <br></br>
        <input
          type='number'
          name='stock'
          placeholder='Item Stock' />
        <br></br>
        <button type='submit'>{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;