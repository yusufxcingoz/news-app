import React from "react";
import NavItems from "./NavItems";

function NavGeneral({ data }) {
  const slicedData = data.slice(0, 5);
  return <NavItems data={data} category="General" />;
}

export default NavGeneral;
