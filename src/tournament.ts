import List from "./list";

type ListTeams = ReadonlyArray<Team>;
type ListRounds = Array<any>;
type ListSimple = Array<Team>;
type Matches = string[][][];

type Team = {
  readonly id: number;
  readonly name: string;
};

interface TournamentInterface {
  readonly teams: ListTeams;
}

/**
 * Class to create a all-play-all tournament
 * matches considering home and away rounds
 */
export default class Tournament implements TournamentInterface {
  readonly teams: ListTeams;

  constructor(teams: ListTeams) {
    if (teams.length % 2) throw new Error("Teams length must be even");

    this.teams = teams;
  }

  get matches(): Matches {
    return this.tournament();
  }

  /**
   * Create two rounds ensuring the home/away inversion.
   *
   * @return {Array} A complete list of rounds with matches.
   */
  tournament(): Matches {
    const matches = this.calculateMatches();

    return [
      ...matches,
      ...matches.map((round) => round.map(([home, away]) => [away, home])),
    ];
  }

  /**
   * Based on each round, distribute teams to play
   * home or away without repetition
   *
   * @returns {Array} All rounds of the first half of the tournament
   */
  protected calculateMatches(): Matches {
    return this.rounds([[...this.teams]]).map(
      (round: ListRounds, i: number) => {
        const [home, away] = round;
        round = i % 2 ? round : [away, home, ...round.splice(2)];
        return round.reduce(this.createMatch([...round]), []);
      }
    );
  }

  /**
   * Get two teams to play a match and
   * returns new Array with Home and Away Team
   *
   * @param {Array} round - List of teams to play in this round
   */
  protected createMatch(round: ListSimple) {
    return function (match: ListSimple): ListRounds {
      return round.length === 0 ? match : [...match, round.splice(0, 2)];
    };
  }

  /**
   * Based on teams, rotate them to create rounds
   *
   * @param {Array} round - List of teams to play in this round
   * @returns {Array} With Home and Away Team
   */
  protected rounds(teams: ListRounds): ListRounds {
    if (teams.length !== teams[0].length - 1) {
      teams.push(List.lockedRotate(teams[teams.length - 1]));
      teams = this.rounds(teams);
    }
    return teams;
  }
}
