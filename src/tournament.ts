import List from './list'

type Team = string | { __bye?: boolean; [key: string]: any };
type Matches = [Team, Team][][];

interface TournamentInterface {
  readonly teams: Team[]
}

/**
 * Create an all-play-all tournament
 * considering home and away rounds.
 */
export default class Tournament implements TournamentInterface {
  readonly teams: Team[]
  readonly totalRounds: number

  constructor(teams: Team[]) {
    if (teams.length <= 1) {
      throw new Error('A tournament needs at least 2 teams')
    }

    if (teams.length % 2) {
      teams.push({ __bye: true })
    }

    this.teams = teams
    this.totalRounds = teams.length - 1
  }

  get matches(): Matches {
    return this.tournament()
  }

  tournament(): Matches {
    const matches = this.calculateMatches([...this.teams])
    return [
      ...matches,
      ...matches.map((round) => round
        .map(([home, away]) => [away, home] as [Team, Team])),
    ]
  }

  /**
   * Calculates the matches for the given teams and number of rounds.
   * @param {any[]} teams - The array of teams participating in the matches.
   * @param {any[]} [rounds=[]] - The array to store the generated rounds of matches.
   * @param {number} [round=0] - The current round number.
   * @returns {any[]} - The array of generated rounds of matches.
   */
  protected calculateMatches(
    teams: Team[],
    rounds: [][] = [],
    round: number = 0
  ): Matches {
    if (round === this.totalRounds) return rounds

    const rotatedTeams = List.lockedRotate(teams)

    rounds.push(
      rotatedTeams.slice(0, Math.ceil(rotatedTeams.length / 2))
        .reduce((acc: [Team, Team][], team: Team, index: number) => {
          const opponent = rotatedTeams[rotatedTeams.length - ++index]

          // Transfer a team directly to the next round of a
          // tournament in the absence of an assigned opponent.
          if (opponent.__bye || (team as { __bye?: boolean }).__bye) return acc

          acc.push(round % 2 ? [team, opponent] : [opponent, team])
          return acc
        }, [])
    )

    return this.calculateMatches(rotatedTeams, rounds, ++round)
  }
}
