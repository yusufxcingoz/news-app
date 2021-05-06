import React from "react";
import NavItems from "./NavItems";

function NavTech({ data }) {
  const slicedData = data.slice(0, 5);
  return <NavItems data={data} category="Tech" />;
}

export default NavTech;
