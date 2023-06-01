import React from "react";
import PropTypes from "prop-types";
import { v4 } from 'uuid';
import ReusableForm from "./ReusableForm";

function NewInventoryForm(props) {

  function handleNewInventoryFormSubmission(event) {
    event.preventDefault();
    props.onNewInventoryCreation({
      names: event.target.names.value,
      origin: event.target.origin.value,
      price: event.target.price.value,
      roast: event.target.roast.value,
      stock: event.target.stock.value,
      id: v4()
    });
  }

  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleNewInventoryFormSubmission}
        buttonText="Add Item" />
    </React.Fragment>
  );
}

NewInventoryForm.propTypes = {
  onNewInventoryCreation: PropTypes.func
};

export default NewInventoryForm;