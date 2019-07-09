import React from "react";
import { shallow } from "enzyme";
import Showcase from "./Showcase";

describe("Showcase", () => {
  it("should expect wrapper to match snapshot", () => {
    let wrapper = shallow(
      <Showcase films={[{ openingCrawl: "random testing sentence." }]} />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
