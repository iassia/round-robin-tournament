export default class List {
  static rotate = (list: Array<any> = []): Array<any> =>
    list.slice(1, list.length).concat(list.slice(0, 1))
  static lockedRotate(
    list: Array<any> = [],
    lockedPosition: number = 0
  ): Array<any> {
    const listCopy = [...list]
    const [lockedItem] = listCopy.splice(lockedPosition, 1)
    const rotatedList = this.rotate(listCopy)
    rotatedList.splice(lockedPosition, 0, lockedItem)
    return rotatedList
  }
}
