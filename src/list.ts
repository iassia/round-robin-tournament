export default class List {
  static rotate(list: Array<any> = []): Array<any> {
    return list.slice(1, list.length).concat(list.slice(0, 1));
  }

  static lockedRotate(
    list: Array<any> = [],
    lockedPosition: number = 0
  ): Array<any> {
    const rotatedList = [...list];
    const [lockedItem] = rotatedList.splice(lockedPosition, 1);
    const rotatedItems = this.rotate(rotatedList);
    rotatedItems.splice(lockedPosition, 0, lockedItem);
    return rotatedItems;
  }
}
