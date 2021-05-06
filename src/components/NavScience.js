import React from "react";
import NavItems from "./NavItems";

function NavScience({ data }) {
  const slicedData = data.slice(0, 5);
  return <NavItems data={data} category="Science" />;
}

export default NavScience;
