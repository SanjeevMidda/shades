import React from "react";

const Block = ({ color }) => {
  let styles = {
    backgroundColor: color,
  };
  return <div className="block" style={styles}></div>;
};

export default Block;
