import React from "react";
import PropTypes from "prop-types";

function InventoryDetail(props) {
  const { item, onClickingDelete } = props;

  return (
    <React.Fragment>
      <hr />
      <h2>Item Detail</h2>
      <h3>{item.names}</h3>
      <p><em>Origin:{item.origin}</em></p>
      <p>Price: {item.price}</p>
      <p>Roast: {item.roast}</p>
      <p>Remaining Stock: {(item.stock === 0) ? 'Out of Stock' : (item.stock <= 10) ? item.stock + ' (Almost Empty)' : item.stock}</p>
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