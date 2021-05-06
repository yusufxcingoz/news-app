import React from "react";

export default function Nav({ setStep }) {
  return (
    <div class="mt-14">
      <div class=" border-b-2 border-gray-200 ">
        <div class="flex justify-between mb-2 text-md">
          <button
            onClick={() => setStep(0)}
            class="focus:border-b-2 border-gray-600 focus:outline-none"
          >
            GENERAL
          </button>
          <button
            onClick={() => setStep(1)}
            class="focus:border-b-2 border-gray-600 focus:outline-none"
          >
            TECH
          </button>
          <button
            onClick={() => setStep(2)}
            class="focus:border-b-2 border-gray-600 focus:outline-none"
          >
            SPORT
          </button>
          <button
            onClick={() => setStep(3)}
            class="focus:border-b-2 border-gray-600 focus:outline-none"
          >
            SCIENCE
          </button>
          <button
            onClick={() => setStep(4)}
            class="focus:border-b-2 border-gray-600 focus:outline-none"
          >
            ECONOMY
          </button>
          <button
            onClick={() => setStep(5)}
            class="focus:border-b-2 border-gray-600 focus:outline-none"
          >
            ENTERTAINMENT
          </button>
          <button
            onClick={() => setStep(6)}
            class="focus:border-b-2 border-gray-600 focus:outline-none"
          >
            LIFE
          </button>
          <button
            onClick={() => setStep(7)}
            class="focus:border-b-2 border-gray-600 focus:outline-none"
          >
            GAME
          </button>
          <button
            onClick={() => setStep(8)}
            class="focus:border-b-2 border-gray-600 focus:outline-none"
          >
            MAGAZINE
          </button>
        </div>
      </div>
    </div>
  );
}
