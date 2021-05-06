import React from "react";

function Header() {
  return (
    <div class="flex justify-between m-10   ">
      <div class="  font-bold text-4xl w-3">
        <h1>News Site</h1>
      </div>
      <div class="flex justify-between items-center  ">
        <a class="text-black no-underline hover:text-gray-800" href="">
          <p class=" m-5 text-sm text-gray-400 ">FOLLOW US</p>
        </a>
        <a class="text-black no-underline hover:text-gray-800" href="">
          <p class=" m-5 text-sm text-gray-400 ">Instagram</p>
        </a>
        <a class="text-black no-underline hover:text-gray-800" href="">
          <p class=" m-5 text-sm text-gray-400 ">Twitter</p>
        </a>
      </div>
    </div>
  );
}

export default Header;
