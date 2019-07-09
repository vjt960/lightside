import React from "react";
import { shallow } from "enzyme";
import App from "./App";

describe("App", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
    wrapper.setState({
      people: [
        { name: "jev", favorited: false },
        { name: "Anneke", favorited: true }
      ],
      favorites: [{ name: "Anneke", favorited: true }]
    });
  });

  it("should match snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should be able to toggle favorited objects", () => {
    wrapper.instance().toggleFavorite("people", "jev");
    expect(wrapper.state("people")[1].favorited).toEqual(true);
  });

  it("should add objects to favorites", () => {
    const expected = [
      { name: "Anneke", favorited: true },
      { name: "jev", favorited: true }
    ];
    wrapper.instance().toggleFavorite("people", "jev");
    expect(wrapper.state("favorites")).toEqual(expected);
  });

  it("should remove objects from favorites", () => {
    const expected = [];
    wrapper.instance().toggleFavorite("people", "Anneke");
    expect(wrapper.state("favorites")).toEqual(expected);
  });
});
