import React from "react";

function NavItems({ data, category }) {
  const slicedData = data.slice(0, 5);
  return (
    <div class="flex justify-between items-center mt-10 max-w-6xl mx-auto">
      {slicedData.map((e) => {
        return (
          <div class="w-52 h-64  ">
            <img src={e.urlToImage} />
            <h1>{e.author}</h1>
            <p class="text-lg font-bold">{e.title}</p>
            <p>{category}</p>
          </div>
        );
      })}
    </div>
  );
}

export default NavItems;
