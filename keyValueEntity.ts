class KeyValueEntity<T extends Record<keyof T, string | number>> {
  public enum: T;

  public getValue(key: number): T {
    return this.enum[key];
  }
}


enum Statuses {
  Created = 1,
  Voided = 2,
  Paid = 3,
  PartiallyPaid = 4
}


enum Matatuses {
  Created = 1,
  Voided = 2,
  Paid = 3,
  PartiallyPaid = 4
}


class Status extends KeyValueEntity<typeof Statuses> {

  constructor() {
    super();
    this.enum = Statuses;
  }
}


const s: Status = new Status();
console.log(s.getValue(1));
