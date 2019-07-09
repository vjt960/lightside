import {
  getFilms,
  getPeople,
  getPlanets,
  getVehicles,
  fetchAPI
} from "./apiCalls";

describe("apiCalls", () => {
  let mockResponse = { results: ["item1", "item2", "item3", "item4", "item5"] };

  describe("getFilms", () => {
    beforeEach(() => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockResponse)
        });
      });
    });

    it("should be called with correct URL", () => {
      const expected = "https://swapi.co/api/films/";
      getFilms();
      expect(window.fetch).toHaveBeenCalledWith(expected);
    });

    it("HAPPY: return a parsed response", async () => {
      const result = await getFilms();
      expect(result.length).toEqual(mockResponse.results.length);
    });

    it("SAD: return an error", async () => {
      window.fetch = jest.fn().mockImplementationOnce(() => {
        return Promise.resolve({
          ok: false
        });
      });
      await expect(getFilms()).rejects.toEqual(Error("Error fetching data"));
    });
  });

  describe("getPeople", () => {
    beforeEach(() => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockResponse)
        });
      });
    });

    it("should be called with correct URL", () => {
      const expected = "https://swapi.co/api/people/";
      getPeople();
      expect(window.fetch).toHaveBeenCalledWith(expected);
    });

    it("HAPPY: return a parsed response", async () => {
      const result = await getPeople();
      expect(result.length).toEqual(mockResponse.results.length);
    });

    it("SAD: return an error", async () => {
      window.fetch = jest.fn().mockImplementationOnce(() => {
        return Promise.resolve({
          ok: false
        });
      });
      await expect(getPeople()).rejects.toEqual(Error("Error fetching data"));
    });
  });

  describe("getPlanets", () => {
    beforeEach(() => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockResponse)
        });
      });
    });

    it("should be called with correct URL", () => {
      const expected = "https://swapi.co/api/planets/";
      getPlanets();
      expect(window.fetch).toHaveBeenCalledWith(expected);
    });

    it("HAPPY: return a parsed response", async () => {
      const result = await getPlanets();
      expect(result.length).toEqual(mockResponse.results.length);
    });

    it("SAD: return an error", async () => {
      window.fetch = jest.fn().mockImplementationOnce(() => {
        return Promise.resolve({
          ok: false
        });
      });
      await expect(getPlanets()).rejects.toEqual(Error("Error fetching data"));
    });
  });

  describe("getVehicles", () => {
    beforeEach(() => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockResponse)
        });
      });
    });

    it("should be called with correct URL", () => {
      const expected = "https://swapi.co/api/vehicles/";
      getVehicles();
      expect(window.fetch).toHaveBeenCalledWith(expected);
    });

    it("HAPPY: return a parsed response", async () => {
      const result = await getVehicles();
      expect(result.length).toEqual(mockResponse.results.length);
    });

    it("SAD: return an error", async () => {
      window.fetch = jest.fn().mockImplementationOnce(() => {
        return Promise.resolve({
          ok: false
        });
      });
      await expect(getVehicles()).rejects.toEqual(Error("Error fetching data"));
    });
  });

  describe("fetchAPI", () => {
    beforeEach(() => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockResponse)
        });
      });
    });

    it("Promise.All: return a parsed response", async () => {
      const result = await fetchAPI();
      expect(result.length).toEqual(mockResponse.length);
    });
  });
});
