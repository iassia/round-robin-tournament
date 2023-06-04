import List from './list'

type ListTeams = ReadonlyArray<Team>
// type ListRounds = Array<any>;
// type ListSimple = Array<Team>;
type Matches = string[][][]

type Team = {
  readonly id: number
  readonly name: string
}

interface TournamentInterface {
  readonly teams: ListTeams
}

/**
 * Class to create a all-play-all tournament
 * matches considering home and away rounds
 */
export default class Tournament implements TournamentInterface {
  readonly teams: ListTeams
  readonly totalRounds: number

  constructor(teams: ListTeams) {
    if (teams.length % 2) throw new Error('Teams length must be even')

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

  protected calculateMatches(
    teams: any,
    rounds: any = [],
    round: any = 0
  ): Matches {
    if (round === this.totalRounds) return rounds

    const rotatedTeams = List.lockedRotate(teams)
    const halfTeams = rotatedTeams.slice(0, Math.ceil(rotatedTeams.length / 2))
    rounds.push(
      halfTeams.map((team: Object, index: number) => {
        const opponent = rotatedTeams[rotatedTeams.length - ++index]
        return round % 2 ? [team, opponent] : [opponent, team]
      })
    )

    return this.calculateMatches(rotatedTeams, rounds, ++round)
  }
}
