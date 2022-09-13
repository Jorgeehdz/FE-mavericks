import React from "react";
import CardProductUser from "./CardProductUser";
import CardOrderAdmin from "./CardOrderAdmin";

const BoardUser = () => {

  return (
    <div className="container" style={{ display: "flex" }}>
      <CardProductUser />
      <CardOrderAdmin />
    </div>
  );
};

export default BoardUser;
