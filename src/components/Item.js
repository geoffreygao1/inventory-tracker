import React from "react";
import PropTypes from "prop-types";

function Ticket(props) {
  return (
    <React.Fragment>
      <div onClick={() => props.whenItemClicked(props.id)}>
        <h3>{props.names}</h3>
        <p><em>Origin:{props.origin}</em></p>
        <p>Price: {props.price}</p>
        <p>Roast: {props.roast}</p>
        <p>Remaining Stock: {props.stock}</p>
      </div>
      <button onClick={() => props.sellItem(props.id)}>Sell Item</button>
      <hr />
    </React.Fragment>
  );
}

Ticket.propTypes = {
  names: PropTypes.string,
  origin: PropTypes.string,
  price: PropTypes.string,
  roast: PropTypes.string,
  stock: PropTypes.number,
  id: PropTypes.string,
  whenTicketClicked: PropTypes.func,
  sellItem: PropTypes.func
};

export default Ticket;