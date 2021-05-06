import React from "react";

function Header() {
  return (
    <div class="flex justify-between m-10   ">
      <div class="  font-bold text-4xl w-3">
        <h1>News Site</h1>
      </div>
      <div class="flex justify-between items-center  ">
        <p class=" m-5 text-sm text-gray-400 ">FOLLOW US</p>
        <p class=" m-5 text-sm text-gray-400 ">Instagram</p>
        <p class=" m-5 text-sm text-gray-400 ">Twitter</p>
      </div>
    </div>
  );
}

export default Header;
