import React from "react";

const AddInventory = () => {
  return (
    <div className="inventory">
      <div className="inventory-title">Add Inventory</div>
      <form>
        <input type="text" placeholder="Item to stock" />
        <input type="num" placeholder="Quantity" />
      </form>
    </div>
  );
};

export default AddInventory;
