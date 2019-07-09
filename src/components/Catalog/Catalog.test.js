import React from "react";
import { shallow } from "enzyme";
import Catalog from "./Catalog";

describe("Catalog", () => {
  it("should match the snapshot", () => {
    const wrapper = shallow(<Catalog data={[1, 2, 3]} counter={1} />);
    expect(wrapper).toMatchSnapshot();
  });
});
