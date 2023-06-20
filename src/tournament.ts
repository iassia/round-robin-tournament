import List from './list'

type Matches = any[][][]
type Team = string | { [key: string]: any }
type TeamsList = Team[]

interface TournamentInterface {
  readonly teams: TeamsList
}

/**
 * Class to create a all-play-all tournament
 * matches considering home and away rounds
 */
export default class Tournament implements TournamentInterface {
  readonly teams: TeamsList
  readonly totalRounds: number

  constructor(teams: TeamsList) {
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
      ...matches.map((round) => round.map(([home, away]) => [away, home])),
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
    teams: any,
    rounds: any = [],
    round: any = 0
  ): Matches {
    if (round === this.totalRounds) return rounds

    const rotatedTeams = List.lockedRotate(teams)
    const halfTeams = rotatedTeams.slice(0, Math.ceil(rotatedTeams.length / 2))

    rounds.push(
      halfTeams
        .map((team: any, index: number) => {
          const opponent = rotatedTeams[rotatedTeams.length - ++index]
          if (opponent.__bye || team.__bye) return
          return round % 2 ? [team, opponent] : [opponent, team]
        })
        .filter(Boolean)
    )

    return this.calculateMatches(rotatedTeams, rounds, ++round)
  }
}
