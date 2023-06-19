import Tournament from '../tournament'

const TEAMS = [
  'Arsenal',
  'Chelsea',
  'Liverpool',
  'Manchester City',
  'Manchester United',
  'West Ham',
]

describe('Tournament', () => {
  let tournament: Tournament

  beforeEach(() => {
    tournament = new Tournament(TEAMS)
  })

  it('throw error if teams length are odd', () => {
    expect(() => new Tournament([{ id: 1, name: 'Arsenal' }])).toThrowError(
      Error
    )
  })

  it('returns correct matches', () => {
    expect(tournament.matches).toStrictEqual([
      [
        ['Chelsea', 'Arsenal'],
        ['West Ham', 'Liverpool'],
        ['Manchester United', 'Manchester City'],
      ],
      [
        ['Arsenal', 'Liverpool'],
        ['Manchester City', 'Chelsea'],
        ['Manchester United', 'West Ham'],
      ],
      [
        ['Manchester City', 'Arsenal'],
        ['Liverpool', 'Manchester United'],
        ['Chelsea', 'West Ham'],
      ],
      [
        ['Arsenal', 'Manchester United'],
        ['West Ham', 'Manchester City'],
        ['Chelsea', 'Liverpool'],
      ],
      [
        ['West Ham', 'Arsenal'],
        ['Manchester United', 'Chelsea'],
        ['Manchester City', 'Liverpool'],
      ],
      [
        ['Arsenal', 'Chelsea'],
        ['Liverpool', 'West Ham'],
        ['Manchester City', 'Manchester United'],
      ],
      [
        ['Liverpool', 'Arsenal'],
        ['Chelsea', 'Manchester City'],
        ['West Ham', 'Manchester United'],
      ],
      [
        ['Arsenal', 'Manchester City'],
        ['Manchester United', 'Liverpool'],
        ['West Ham', 'Chelsea'],
      ],
      [
        ['Manchester United', 'Arsenal'],
        ['Manchester City', 'West Ham'],
        ['Liverpool', 'Chelsea'],
      ],
      [
        ['Arsenal', 'West Ham'],
        ['Chelsea', 'Manchester United'],
        ['Liverpool', 'Manchester City'],
      ],
    ])
  })

  it('returns 10 rounds when receiving 6 teams', () => {
    expect(tournament.matches.length).toBe(10)
  })
})
