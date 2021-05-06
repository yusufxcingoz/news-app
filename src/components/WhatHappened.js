import React from "react";

export default function WhatHappened({ data }) {
  return (
    <div class="mt-20">
      <div class="border-l-8 border-gray-500">
        <h1>What Happened</h1>
      </div>

      {data.map((e) => {
        return (
          <div class=" flex my-16 items-center h-32  ">
            <div class="w-64 h-32 object-fill">
              <img class="" src={e.urlToImage} />
            </div>
            <div class="ml-8 w-96">
              <p class="font-extralight">{e.author.toUpperCase()}</p>
              <h2 class="text-lg font-bold">{e.title}</h2>
              <p>{e.title}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
