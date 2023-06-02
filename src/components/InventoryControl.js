import React from 'react';
import NewInventoryForm from './NewInventoryForm';
import InventoryList from './InventoryList';
import InventoryDetail from './InventoryDetail';
import EditInventoryForm from './EditInventoryForm';


class InventoryControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainInventoryList: [],
      selectedItem: null,
      editing: false

    };
  }

  handleClick = () => {
    if (this.state.selectedItem != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedItem: null,
        editing: false
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    }
  }

  handleAddingNewItemToList = (newItem) => {
    const newMainInventoryList = this.state.mainInventoryList.concat(newItem);
    this.setState({
      mainInventoryList: newMainInventoryList,
      formVisibleOnPage: false
    });
  }

  handleChangingSelectedItem = (id) => {
    const selectedItem = this.state.mainInventoryList.filter(item => item.id === id)[0];
    this.setState({ selectedItem: selectedItem });
  }

  handleReduceStock = (id) => {
    const selectedItem = this.state.mainInventoryList.filter(item => item.id === id)[0];
    const reducedStockItem = { ...selectedItem, stock: (selectedItem.stock === 0) ? 0 : selectedItem.stock - 1 };
    this.setState({ selectedItem: selectedItem });
    const editedMainInventoryList = this.state.mainInventoryList
      .filter(item => item.id !== reducedStockItem.id)
      .concat(reducedStockItem);
    this.setState({
      mainInventoryList: editedMainInventoryList,
      editing: false,
      selectedItem: null
    });
  }

  handleDeletingItem = (id) => {
    const newMainInventoryList = this.state.mainInventoryList.filter(item => item.id !== id);
    this.setState({
      mainInventoryList: newMainInventoryList,
      selectedItem: null
    });
  }

  handleEditClick = () => {
    this.setState({ editing: true });
  }

  handleEditingItemInList = (itemToEdit) => {
    const editedMainInventoryList = this.state.mainInventoryList
      .filter(item => item.id !== this.state.selectedItem.id)
      .concat(itemToEdit);
    this.setState({
      mainInventoryList: editedMainInventoryList,
      editing: false,
      selectedItem: null
    });
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.editing) {
      currentlyVisibleState = <EditInventoryForm item={this.state.selectedItem} onEditItem={this.handleEditingItemInList} />
      buttonText = "Return to Item List";
    } else if (this.state.selectedItem != null) {
      currentlyVisibleState =
        <InventoryDetail
          item={this.state.selectedItem}
          onClickingDelete={this.handleDeletingItem}
          onClickingEdit={this.handleEditClick} />
      buttonText = "Return to Item List";
    }
    else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewInventoryForm onNewInventoryCreation={this.handleAddingNewItemToList} />;
      buttonText = "Return to Item List";
    } else {
      currentlyVisibleState = <InventoryList inventoryList={this.state.mainInventoryList} onItemSelection={this.handleChangingSelectedItem} reduceInventoryCount={this.handleReduceStock} />;
      buttonText = "Add Item";
    }

    return (
      <React.Fragment>
        {currentlyVisibleState}
        <br />
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }

}

export default InventoryControl;