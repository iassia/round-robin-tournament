import Tournament from "./src/Tournament";

const TEAMS = [
  { id: 1, name: "Arsenal" },
  { id: 2, name: "Chelsea" },
  { id: 3, name: "Liverpool" },
  { id: 4, name: "Manchester City" },
  { id: 5, name: "Manchester United" },
  { id: 6, name: "Westham" },
];

const matches = new Tournament(TEAMS).matches;
