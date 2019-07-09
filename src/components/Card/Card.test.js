import React from "react";
import { shallow } from "enzyme";
import Card from "./Card";

describe("Card", () => {
  it("should match the snapshot", () => {
    const wrapper = shallow(
      <Card
        toggle={jest.fn()}
        type="people"
        name="jev skywalker"
        key="jev skywalker"
        favorited={false}
        data={[1, 2, 3]}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it("should toggle the card favorited property", () => {
    const toggleFave = jest.fn();
    const wrapper = shallow(
      <Card
        toggle={toggleFave}
        type="people"
        name="jev skywalker"
        key="jev skywalker"
        favorited={false}
        data={[1, 2, 3]}
      />
    );
    wrapper.find("button").simulate("click");
    const expected = ["people", "jev skywalker"];
    expect(toggleFave).toBeCalledWith(...expected);
  });
});
