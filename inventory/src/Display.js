import React from "react";

function Display({data}) {
  console.log(data);
    // const renderData = (arg) => {
    //   return Object.entries(arg).map((item) => {
    //     return <li className="display-item">{`${item[0]}: ${item[1]}`}</li>;
    //   });
    // };
  return (
    <div className="display">
      <div className="display-title">What's in Stock</div>
      {/* <ul className="display-item-container">{renderData(data)}</ul> */}
    </div>
  );
}
export default Display;
