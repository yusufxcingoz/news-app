import React from "react";
import NavItems from "./NavItems";

function NavMagazine({ data }) {
  const slicedData = data.slice(0, 5);
  return <NavItems data={data} category="Magazine" />;
}

export default NavMagazine;
