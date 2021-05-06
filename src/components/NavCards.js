import React from "react";
import NavGeneral from "./NavGeneral";
import NavSport from "./NavSport";
import NavTech from "./NavTech";
import NavScience from "./NavScience";
import NavEconomy from "./NavEconomy";
import NavEntertainment from "./NavEntertainment";
import NavLife from "./NavLife";
import NavGame from "./NavGame";
import NavMagazine from "./NavMagazine";

function NavCards({ step, data }) {
  if (step === 0) {
    return (
      <div>
        <NavGeneral data={data} />
      </div>
    );
  }
  if (step === 1) {
    return (
      <div>
        <NavTech data={data} />
      </div>
    );
  }
  if (step === 2) {
    return (
      <div>
        <NavSport data={data} />
      </div>
    );
  }
  if (step === 3) {
    return (
      <div>
        <NavScience data={data} />
      </div>
    );
  }
  if (step === 4) {
    return (
      <div>
        <NavEconomy data={data} />
      </div>
    );
  }
  if (step === 5) {
    return (
      <div>
        <NavEntertainment data={data} />
      </div>
    );
  }
  if (step === 6) {
    return (
      <div>
        <NavLife data={data} />
      </div>
    );
  }
  if (step === 7) {
    return (
      <div>
        <NavGame data={data} />
      </div>
    );
  }
  if (step === 8) {
    return (
      <div>
        <NavMagazine data={data} />
      </div>
    );
  }
}

export default NavCards;
