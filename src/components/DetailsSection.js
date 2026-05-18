import React from "react";
import Collapsible from "./Collapsible";

const DetailsSection = () => (
  <section className="section details">
    <Collapsible title="Mushroom — Button & Oyster (Detailed)" defaultOpen={true}>
      <div className="grid large">
        <div className="card big">
          <h4>Button Mushroom</h4>
          <p>High-yield, consistent quality — ideal for mandi, hotels, and restaurants.</p>
          <ul>
            <li>Crop cycle: 18–22 days</li>
            <li>Packing: 200-g clamshells, 2–5 kg crates</li>
            <li>Distribution: daily harvest → same-day dispatch</li>
          </ul>
        </div>
        <div className="card big">
          <h4>Oyster Mushroom</h4>
          <p>Fast growing variety for premium chefs & retail packs.</p>
          <ul>
            <li>Crop cycle: 12–16 days</li>
            <li>Value-adds: dried flakes, mushroom powder</li>
            <li>Target: gourmet restaurants & packaged retail</li>
          </ul>
        </div>
        <div className="card big">
          <h4>Production Notes</h4>
          <p>
            Substrate: wheat/paddy straw compost; spawn from certified labs;
            hygiene + cold chain for fresh dispatch.
          </p>
        </div>
      </div>
    </Collapsible>
  </section>
);

export default DetailsSection;
