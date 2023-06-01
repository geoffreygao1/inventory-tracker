import React from "react";
import Item from "./Item";
import PropTypes from "prop-types";

function InventoryList(props) {

  return (
    <React.Fragment>
      <hr />
      {props.inventoryList.map((item) =>
        <Item
          whenItemClicked={props.onItemSelection}
          names={item.names}
          origin={item.origin}
          price={item.price}
          roast={item.roast}
          stock={item.stock}
          id={item.id}
          key={item.id} />
      )}
    </React.Fragment>
  );
}

InventoryList.propTypes = {
  inventoryList: PropTypes.array,
  onItemSelection: PropTypes.func
};

export default InventoryList;