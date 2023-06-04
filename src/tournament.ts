import List from "./list";

type ListTeams = ReadonlyArray<Team>;
// type ListRounds = Array<any>;
// type ListSimple = Array<Team>;
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
  readonly totalRounds: number;

  constructor(teams: ListTeams) {
    if (teams.length % 2) throw new Error("Teams length must be even");

    this.teams = teams;
    this.totalRounds = teams.length - 1;
  }

  get matches(): Matches {
    return this.tournament();
  }

  tournament(): Matches {
    const matches = this.calculateMatches([...this.teams]);

    return [
      ...matches,
      ...matches.map((round) => round.map(([home, away]) => [away, home])),
    ];
  }

  protected calculateMatches(teams: any, rounds: any = [], round: any = 0): Matches {
    if (round === this.totalRounds) return rounds;

    const r = List.lockedRotate(teams)
    const firstHalf = r.slice(0, Math.ceil(r.length / 2));
    rounds.push(firstHalf.map((team: Object, index: number) => {
      const team2 = r[r.length - 1 - index]
      return round % 2 ? [team, team2] : [team2, team];
    }));

    return this.calculateMatches(r, rounds, round + 1);
  }
}