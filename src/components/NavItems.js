import React from "react";
import Link from "react-dom";

function NavItems({ data, category }) {
  const slicedData = data.slice(0, 5);
  return (
    <div class="flex justify-between items-center mt-10 max-w-6xl mx-auto">
      {slicedData.map((e) => {
        return (
          <a class="text-black no-underline hover:text-gray-800" href={e.url}>
            <div class="w-52 h-64  ">
              <img src={e.urlToImage} />
              <h1 class="text-xl font-bold">{e.author}</h1>
              <p class="text-lg ">{e.title}</p>
              <p>{category}</p>
            </div>
          </a>
        );
      })}
    </div>
  );
}

export default NavItems;
