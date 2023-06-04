![CI](https://github.com/iassia/round-robin-tournament/workflows/CI/badge.svg)

# Round-robin tournament

A round-robin tournament (or all-play-all tournament) using JavaScript / TypeScript.
The goal is to create a competition in which each team meets the other teams in two rounds.

## How to Use It

Install from npm:

`npm i round-robin-tournament`

Import `round-robin-tournament` and pass an `Array` to constructor.
Use the `matches` method to get the fixture.

```js
import Tournament from 'round-robin-tournament'

const TEAMS = [
  { id: 1, name: 'Arsenal' },
  { id: 2, name: 'Chelsea' },
  { id: 3, name: 'Liverpool' },
  { id: 4, name: 'Manchester City' },
  { id: 5, name: 'Manchester United' },
  { id: 6, name: 'West Ham' },
]

const tournament = new Tournament(TEAMS)
const matches = tournament.matches
```

## Result example

- The `matches` method returns and `Array` of `rounds`
- Each `round` is an Array of `matches`
- Each `match` is an Array of two teams: `[{ home } , { visitor/away }]`

```
[
  ...
  [
    [ { id: 1, name: 'Arsenal' }, { id: 5, name: 'Manchester United' } ],
    [ { id: 6, name: 'West Ham' }, { id: 2, name: 'Chelsea' } ],
    [ { id: 3, name: 'Liverpool' }, { id: 4, name: 'Manchester City' } ]
  ]
  ...
]
```

## Caveat

If you are not using a transpiler or importing using require via CommonJS,
you may need to access the `default` reference.

```js
const Tournament = require('./tournament.js').default
```
