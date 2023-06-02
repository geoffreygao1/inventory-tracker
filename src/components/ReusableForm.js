import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        Item Name: <input
          type='text'
          name='names'
          placeholder='e.g. Epicodus Blend' defaultValue={props.itemToEdit ? props.itemToEdit.names : null} />
        <br></br>
        Origin: <input
          type='text'
          name='origin'
          placeholder='e.g. Columbia' defaultValue={props.itemToEdit ? props.itemToEdit.origin : null} />
        <br></br>
        Price: <input
          type='text'
          name='price'
          placeholder='e.g. $4.99' defaultValue={props.itemToEdit ? props.itemToEdit.price : null} />
        <br></br>
        Roast: <input
          type='text'
          name='roast'
          placeholder='e.g. Light Roast' defaultValue={props.itemToEdit ? props.itemToEdit.roast : null} />
        <br></br>
        Stock: <input
          type='number'
          name='stock'
          placeholder='e.g. 130' defaultValue={props.itemToEdit ? props.itemToEdit.stock : null} />
        <br></br>
        <button type='submit'>{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string,
  itemToEdit: PropTypes.object
};

export default ReusableForm;