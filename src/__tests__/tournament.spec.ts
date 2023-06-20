import Tournament from '../tournament'

describe('Tournament', () => {
  it('handles even team number', () => {
    const tournament = new Tournament([
      'Arsenal',
      'Chelsea',
      'Liverpool',
      'Manchester City',
      'Manchester United',
      'West Ham',
    ])

    expect(tournament.matches.length).toBe(10)
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
    expect(tournament.teams.length).toBe(6)
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
