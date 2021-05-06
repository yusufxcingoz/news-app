import React from "react";
import NavItems from "./NavItems";

function NavGame({ data }) {
  const slicedData = data.slice(0, 5);
  return <NavItems data={data} category="Game" />;
}

export default NavGame;
