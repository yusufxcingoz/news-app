import React from "react";
import NavItems from "./NavItems";

function NavSport({ data }) {
  const slicedData = data.slice(0, 5);
  return <NavItems data={data} category="Sport" />;
}

export default NavSport;
