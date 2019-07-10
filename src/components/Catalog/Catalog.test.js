import React from "react";
import { shallow } from "enzyme";
import Catalog from "./Catalog";
import Card from "../Card/Card";

describe("Catalog", () => {
  it("should match the snapshot", () => {
    const wrapper = shallow(<Catalog data={[1, 2, 3]} counter={1} />);
    expect(wrapper).toMatchSnapshot();
  });

  it("should render an <h2/> element when counter is 0", () => {
    const expected = <h2>Add some favorites!</h2>;
    const wrapper = shallow(<Catalog data={[1, 2, 3]} counter={0} />);
    expect(wrapper.containsMatchingElement(expected)).toEqual(true);
  });

  it("should render a Card component when counter is greater than 0", () => {
    const expected = <Card />;
    const wrapper = shallow(<Catalog data={[1, 2, 3]} counter={1} />);
    expect(wrapper.containsMatchingElement(expected)).toEqual(true);
  });
});
