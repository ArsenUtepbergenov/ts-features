export class ArrayWrapper {
  private _nums: number[]

  constructor(nums: number[]) {
    this._nums = nums
  }

  public valueOf(): number {
    return this._nums.reduce((a, i) => a + i)
  }

  public toString(): string {
    return JSON.stringify(this._nums)
  }
}

const obj1 = new ArrayWrapper([1, 2])
const obj2 = new ArrayWrapper([3, 4])
// String(obj1); // "[1,2]"
// String(obj2); // "[3,4]"

console.log(obj1 + obj2)
