import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";


function EditInventoryForm(props) {
  const { item } = props;

  function handleEditInventoryFormSubmission(event) {
    event.preventDefault();
    props.onEditItem({ names: event.target.names.value, origin: event.target.origin.value, price: event.target.price.value, roast: event.target.roast.value, stock: event.target.stock.value, id: item.id });
  }

  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleEditInventoryFormSubmission}
        buttonText="Update Item"
        itemToEdit={item} />
    </React.Fragment>
  );
}

EditInventoryForm.propTypes = {
  item: PropTypes.object,
  onEditItem: PropTypes.func
};

export default EditInventoryForm;