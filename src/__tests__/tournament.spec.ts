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

  it("return correct first match", () => {
    const [away, home] = TEAMS;
    const [[firstMatch]] = tournament.matches;
    expect(firstMatch).toEqual([home, away]);
  });

  it("return 10 rounds when receive 6 teams", () => {
    expect(tournament.matches.length).toBe(10);
  });
});
