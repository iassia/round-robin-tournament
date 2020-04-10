export default class List {
  static rotate(list: Array<any> = []): Array<any> {
    return list.slice(1, list.length).concat(list.slice(0, 1));
  }

  static lockedRotate(
    list: Array<any> = [],
    lockedPosition: number = 1
  ): Array<any> {
    list = [...list];
    return [...list.splice(0, lockedPosition), ...this.rotate(list)];
  }
}
