import List from './list';

type Team = string | ({ __bye?: boolean } & Record<PropertyKey, unknown>);
type Matches = [Team, Team][][];

interface TournamentInterface {
  readonly teams: Team[];
}

/**
 * Create an all-play-all tournament
 * considering home and away rounds.
 */
export default class Tournament implements TournamentInterface {
  readonly teams: Team[];
  readonly totalRounds: number;

  constructor(teams: Team[]) {
    if (teams.length <= 1) {
      throw new Error('A tournament needs at least 2 teams');
    }

    // Add a bye team if the number of teams is odd
    this.teams = teams.length % 2 ? [...teams, { __bye: true }] : teams;
    this.totalRounds = this.teams.length - 1;
  }

  /**
   * Returns all matches for the tournament, including home and away rounds.
   */
  get matches(): Matches {
    return this.tournament();
  }

  /**
   * Generates the tournament schedule with home and away matches.
   */
  private tournament(): Matches {
    const matches = this.calculateMatches([...this.teams]);

    // Home & away rounds
    return [
      ...matches,
      ...matches.map((round) =>
        round.map(([home, away]) => [away, home] as [Team, Team])
      ),
    ];
  }

  /**
   * Recursively calculates the matches for each round of the tournament.
   */
  private calculateMatches(
    teams: Team[],
    rounds: Matches = [],
    round: number = 0
  ): Matches {
    if (round === this.totalRounds) return rounds;

    const rotatedTeams = List.lockedRotate(teams);

    const newRound: [Team, Team][] = rotatedTeams
      .slice(0, Math.ceil(rotatedTeams.length / 2))
      .reduce((acc, team, index) => {
        const opponent = rotatedTeams[rotatedTeams.length - index - 1];

        if (this.hasBye(opponent) || this.hasBye(team)) return acc;

        acc.push(round % 2 ? [team, opponent] : [opponent, team]);
        return acc;
      }, [] as [Team, Team][]);

    rounds.push(newRound);  
    return this.calculateMatches(rotatedTeams, rounds, round + 1);
  }

  /**
   * Handles odd number of teams with a bye team.
   * @param team - The team to check.
   * @returns True if the team is a bye team, otherwise false.
   */
  private hasBye(team: Team): boolean {
    return typeof team === 'object' && '__bye' in team && team.__bye === true;
  }
}
