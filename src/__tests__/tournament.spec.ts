import Tournament from "../tournament";

const TEAMS = [
  { id: 1, name: "Arsenal" },
  { id: 2, name: "Chelsea" },
  { id: 3, name: "Liverpool" },
  { id: 4, name: "Manchester City" },
  { id: 5, name: "Manchester United" },
  { id: 6, name: "West Ham" },
];

describe("Tournament", () => {
  let tournament: Tournament;

  beforeEach(() => {
    tournament = new Tournament(TEAMS);
  });

  it("throw error if teams length are odd", () => {
    expect(() => new Tournament([{ id: 1, name: "Arsenal" }])).toThrowError(
      Error
    );
  });

  it("returns correct first match", () => {
    expect(tournament.matches)
      .toStrictEqual([[[{"id":2,"name":"Chelsea"},{"id":1,"name":"Arsenal"}],[{"id":6,"name":"West Ham"},{"id":3,"name":"Liverpool"}],[{"id":5,"name":"Manchester United"},{"id":4,"name":"Manchester City"}]],[[{"id":1,"name":"Arsenal"},{"id":3,"name":"Liverpool"}],[{"id":4,"name":"Manchester City"},{"id":2,"name":"Chelsea"}],[{"id":5,"name":"Manchester United"},{"id":6,"name":"West Ham"}]],[[{"id":4,"name":"Manchester City"},{"id":1,"name":"Arsenal"}],[{"id":3,"name":"Liverpool"},{"id":5,"name":"Manchester United"}],[{"id":2,"name":"Chelsea"},{"id":6,"name":"West Ham"}]],[[{"id":1,"name":"Arsenal"},{"id":5,"name":"Manchester United"}],[{"id":6,"name":"West Ham"},{"id":4,"name":"Manchester City"}],[{"id":2,"name":"Chelsea"},{"id":3,"name":"Liverpool"}]],[[{"id":6,"name":"West Ham"},{"id":1,"name":"Arsenal"}],[{"id":5,"name":"Manchester United"},{"id":2,"name":"Chelsea"}],[{"id":4,"name":"Manchester City"},{"id":3,"name":"Liverpool"}]],[[{"id":1,"name":"Arsenal"},{"id":2,"name":"Chelsea"}],[{"id":3,"name":"Liverpool"},{"id":6,"name":"West Ham"}],[{"id":4,"name":"Manchester City"},{"id":5,"name":"Manchester United"}]],[[{"id":3,"name":"Liverpool"},{"id":1,"name":"Arsenal"}],[{"id":2,"name":"Chelsea"},{"id":4,"name":"Manchester City"}],[{"id":6,"name":"West Ham"},{"id":5,"name":"Manchester United"}]],[[{"id":1,"name":"Arsenal"},{"id":4,"name":"Manchester City"}],[{"id":5,"name":"Manchester United"},{"id":3,"name":"Liverpool"}],[{"id":6,"name":"West Ham"},{"id":2,"name":"Chelsea"}]],[[{"id":5,"name":"Manchester United"},{"id":1,"name":"Arsenal"}],[{"id":4,"name":"Manchester City"},{"id":6,"name":"West Ham"}],[{"id":3,"name":"Liverpool"},{"id":2,"name":"Chelsea"}]],[[{"id":1,"name":"Arsenal"},{"id":6,"name":"West Ham"}],[{"id":2,"name":"Chelsea"},{"id":5,"name":"Manchester United"}],[{"id":3,"name":"Liverpool"},{"id":4,"name":"Manchester City"}]]]);
  });

  it("returns 10 rounds when receive 6 teams", () => {
    expect(tournament.matches.length).toBe(10);
  });
});
