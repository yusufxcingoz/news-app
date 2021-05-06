import React from "react";
import Link from "react-dom";

export default function Hero({ data }) {
  return (
    <div class="table">
      <div>
        <div class="inline-block align-top w-1/2 ">
          <div class="border-b-2 max-w-lg font-bold text-lg">
            <h1>Most Read News</h1>
          </div>
          <div class="flex flex-row mt-10 max-h-md">
            <div class="w-96 ">
              <img src="https://cdn.karar.com/news/1361015.jpg" />
            </div>
            <div class="w-72">
              <div class="px-5 pb-2 mt-0 text-xs ">
                <p>Sözcü</p>
              </div>
              <div class="  px-5 font-bold text-2xl ">
                <p class="">
                  Son dakika! 30 Nisan koronavirüs tablosu açıklandı...
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="inline-block align-top w-1/2 ">
          <div class="border-b-2 max-w-lg font-bold text-lg">
            <h1>Most Shared News</h1>
          </div>
          <div class="flex flex-row mt-10 max-h-md">
            <div class="w-96 ">
              <img src="https://cdn.karar.com/news/1361015.jpg" />
            </div>
            <div class="w-72">
              <div class="px-5 pb-2 mt-0 text-xs ">
                <p>Sözcü</p>
              </div>
              <div class="  px-5 font-bold text-2xl ">
                <p class="">
                  Son dakika! 30 Nisan koronavirüs tablosu açıklandı......
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class=" mt-10 flex items-center ">
        <div class="flex items-center h-16 justify-between  align-top w-1/2 bg-pink-500 rounded-l-lg">
          <p class="text-white ml-20">←</p>
          <p class="flex mr-10 justify-end text-white ">
            EN ÇOK BEĞENİLEN HABERLER
          </p>
        </div>
        <div class="flex items-center h-16  align-top w-1/2 bg-yellow-400 rounded-r-lg">
          <p class="flex  ml-10 justify-start text-white">ÖNE ÇIKAN HABERLER</p>
          <p class="text-white ml-20">→</p>
        </div>
      </div>
    </div>
  );
}
