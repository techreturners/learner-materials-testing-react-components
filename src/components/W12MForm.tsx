import { useState } from "react";
import W12MHeader from "./W12MHeader";
import W12MInputSpeciesName from "./W12MInputSpeciesName";
import W12MInputPlanetName from "./W12MInputPlanetName";
import W12MInputNumberOfBeings from "./W12MInputNumberOfBeings";
import W12MInputWhatIs from "./W12MInputWhatIs";
import W12MInputReasonForSparing from "./W12MInputReasonForSparing";

const W12MForm = () => {
  return (
    <section className="w12MForm">
      <W12MHeader />
      <W12MInputSpeciesName />
      <W12MInputPlanetName />
      <W12MInputNumberOfBeings />
      <W12MInputWhatIs />
      <W12MInputReasonForSparing />
    </section>
  );
};

export default W12MForm;