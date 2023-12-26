import { useState } from "react";
import W12MHeader from "./W12MHeader";
import SpeciesName from "./SpeciesName";
import PlanetName from "./PlanetName";
import NumberOfBeings from "./NumberOfBeings";
import TwoPlusTwo from "./TwoPlusTwo";
import SparingReason from "./SparingReason";
import validateSpeciesName from "../validate/validate_species_name";
import validatePlanetName from "../validate/validate_planet_name";
import validateSparingReason from "../validate/validate_sparing_reason";
import validateNumberOfBeings from "../validate/validate_number_of_beings";
import validateTwoPlusTwo from "../validate/validate_two_plus_two";

const W12MForm = () => {
  const [speciesName, setSpeciesName] = useState("humans");
  const [planetName, setPlanetName] = useState("Earth");
  const [numberOfBeings, setNumberOfBeings] = useState("1000000000");
  const [twoPlusTwoValue, setTwoPlusTwoPlusValue] = useState("4");
  const [sparingReason, setSparingReason] = useState(
    "Life on my planet is great!"
  );

  function logFormResponse() {
    console.log(
      speciesName,
      planetName,
      numberOfBeings,
      twoPlusTwoValue,
      sparingReason
    );
  }

  return (
    <section className="w12MForm">
      <W12MHeader />
      <SpeciesName
        speciesName={speciesName}
        onChangeSpeciesName={(e) => setSpeciesName(e)}
        validateField={validateSpeciesName}
      />
      <PlanetName
        planetName={planetName}
        onChangePlanetName={(e) => setPlanetName(e)}
        validateField={validatePlanetName}
      />
      <NumberOfBeings
        numberOfBeings={numberOfBeings}
        onChangeBeings={(e) => setNumberOfBeings(e)}
        validateField={validateNumberOfBeings}
      />
      <TwoPlusTwo
        twoPlusTwoValue={twoPlusTwoValue}
        onChangeTwoPlusTwoValue={(e) => setTwoPlusTwoPlusValue(e)}
        validateField={validateTwoPlusTwo}
      />
      <SparingReason
        sparingReason={sparingReason}
        onChangeSparingReason={(e) => setSparingReason(e)}
        validateField={validateSparingReason}
      />
      <button type="button" onClick={() => logFormResponse()}>
        Submit
      </button>
    </section>
  );
};

export default W12MForm;
