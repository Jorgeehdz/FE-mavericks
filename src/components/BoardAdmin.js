import React from "react";

import CardProductAdmin from "./CardProductAdmin";
import CardOrderAdmin from "./CardOrderAdmin";

const BoardAdmin = () => {

  return (
    <div className="container" style={{ display: "flex" }}>
      <CardProductAdmin />
      <CardOrderAdmin />
    </div>
  );
};

export default BoardAdmin;
