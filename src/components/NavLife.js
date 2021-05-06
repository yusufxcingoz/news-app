import React from "react";
import NavItems from "./NavItems";

function NavLife({ data }) {
  const slicedData = data.slice(0, 5);
  return <NavItems data={data} category="Life" />;
}

export default NavLife;
