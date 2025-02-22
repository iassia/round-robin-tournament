/**
 * Represents a list with rotation operations.
 */
export default class List {
  /**
   * Rotates the list by moving the first element to the end.
   * @param list - The list to rotate. Default is an empty array.
   * @returns The rotated list.
   */
  static rotate = <T>(list: T[] = []): T[] =>
    [...list.slice(1), list[0]]

  /**
   * Rotates the list, while keeping a specific item locked in a given position.
   * @param list - The list to rotate. Default is an empty array.
   * @param lockedPosition - The index of the item to lock. Default is 0.
   * @returns The rotated list with the locked item in the specified position.
   */
  static lockedRotate<T>(
    list: T[] = [],
    lockedPosition: number = 0
  ): T[] {
    if (list.length === 0) return list

    if (lockedPosition < 0 || lockedPosition >= list.length) {
      throw new Error('Invalid lockedPosition')
    }

    const listCopy = [...list]
    const [lockedItem] = listCopy.splice(lockedPosition, 1)
    const rotatedList = this.rotate(listCopy)
    rotatedList.splice(lockedPosition, 0, lockedItem)
    return rotatedList
  }
}
