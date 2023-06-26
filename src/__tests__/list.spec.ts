import List from '../list'

describe('List', () => {
  it('rotates a simple list', () => {
    let rotated = List.rotate([1, 2, 3, 4])
    expect(rotated).toEqual([2, 3, 4, 1])

    rotated = List.rotate(rotated)
    expect(rotated).toEqual([3, 4, 1, 2])

    rotated = List.rotate(rotated)
    expect(rotated).toEqual([4, 1, 2, 3])

    rotated = List.rotate(rotated)
    expect(rotated).toEqual([1, 2, 3, 4])
  })

  it('rotates a list with the first item fixed by default', () => {
    let rotated = List.lockedRotate([1, 2, 3, 4])
    expect(rotated).toEqual([1, 3, 4, 2])

    rotated = List.lockedRotate(rotated)
    expect(rotated).toEqual([1, 4, 2, 3])

    rotated = List.lockedRotate(rotated)
    expect(rotated).toEqual([1, 2, 3, 4])
  })

  it('rotates a list with custom fixed item', () => {
    let rotated = List.lockedRotate([1, 2, 3, 4, 5, 6], 1)
    expect(rotated).toEqual([3, 2, 4, 5, 6, 1])

    rotated = List.lockedRotate(rotated, 1)
    expect(rotated).toEqual([4, 2, 5, 6, 1, 3])

    rotated = List.lockedRotate(rotated, 1)
    expect(rotated).toEqual([5, 2, 6, 1, 3, 4])
  })

  it('ignores empty list when rotating', () => {
    const rotated = List.rotate()
    expect(rotated).toEqual([])
  })

  it('ignores empty list when fixed rotating', () => {
    const rotated = List.lockedRotate()
    expect(rotated).toEqual([])
  })
})
