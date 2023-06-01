import React from "react";
import PropTypes from "prop-types";

function InventoryDetail(props) {
  const { item, onClickingDelete } = props;

  return (
    <React.Fragment>
      <h1>Item Detail</h1>
      <h3>{item.names}</h3>
      <p><em>Origin:{props.origin}</em></p>
      <p>Price: {props.price}</p>
      <p>Roast: {props.roast}</p>
      <p>Remaining Stock: {props.stock}</p>
      <button onClick={props.onClickingEdit}>Update Item</button>
      <button onClick={() => onClickingDelete(item.id)}>Remove Item</button>
      <hr />
    </React.Fragment>
  );
}

InventoryDetail.propTypes = {
  item: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
};

export default InventoryDetail;