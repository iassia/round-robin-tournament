import Tournament from '../tournament'

describe('Tournament', () => {
  it('throw error if no team is provided', () => {
    expect(() => new Tournament([])).toThrowError(Error)
    expect(() => new Tournament(['AFC Richmond'])).toThrowError(Error)
  })

  it.each([
    [2, 2],
    [3, 6],
    [4, 6],
    [5, 10],
    [6, 10],
    [20, 38],
    [21, 42],
  ])('handles %i teams creating %s matches', (teamsLength, expectedMatches) => {
    const tournament = new Tournament(new Array(teamsLength).fill(''))
    expect(tournament.matches.length).toBe(expectedMatches)
  })

  it('handles even team number', () => {
    const tournament = new Tournament([
      'Arsenal',
      'Chelsea',
      'Liverpool',
      'Manchester City',
      'Manchester United',
      'West Ham',
    ])

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

  it('handles odd team number', () => {
    const tournament = new Tournament([
      'Arsenal',
      'Liverpool',
      'Manchester City',
      'West Ham',
      'AFC Richmond',
    ])

    expect(tournament.matches).toStrictEqual([
      [
        ['Liverpool', 'Arsenal'],
        ['AFC Richmond', 'West Ham'],
      ],
      [
        ['Arsenal', 'Manchester City'],
        ['West Ham', 'Liverpool'],
      ],
      [
        ['West Ham', 'Arsenal'],
        ['Manchester City', 'AFC Richmond'],
      ],
      [
        ['Arsenal', 'AFC Richmond'],
        ['Liverpool', 'Manchester City'],
      ],
      [
        ['AFC Richmond', 'Liverpool'],
        ['West Ham', 'Manchester City'],
      ],
      [
        ['Arsenal', 'Liverpool'],
        ['West Ham', 'AFC Richmond'],
      ],
      [
        ['Manchester City', 'Arsenal'],
        ['Liverpool', 'West Ham'],
      ],
      [
        ['Arsenal', 'West Ham'],
        ['AFC Richmond', 'Manchester City'],
      ],
      [
        ['AFC Richmond', 'Arsenal'],
        ['Manchester City', 'Liverpool'],
      ],
      [
        ['Liverpool', 'AFC Richmond'],
        ['Manchester City', 'West Ham'],
      ],
    ])
  })
})
