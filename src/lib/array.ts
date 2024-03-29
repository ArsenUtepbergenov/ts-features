import { getRandomInt, getRandomFloat, getRandomChar } from './random'

/**
 * Generates an array by type.
 *
 * Default ranges: numeric - [-20, 20]; character - full english alphabet
 * @param size The size of an array [default = 0]
 * @param type The type of strategy [passible values: Int, Float, Char]
 * @returns The generated array
 */
export function getArray(size = 0, type: TypeStrategy) {
  return type.get(size)
}

type TypeStrategy = Int | Float | Char

interface Type<T> {
  get(size: number): T[]
}

abstract class DataArray<U> implements Type<U> {
  abstract get(size: number): U[]
}

export abstract class NumericArray extends DataArray<number> {
  protected static _min = -20
  protected static _max = 20

  public static setRange(min: number, max: number): void {
    this._min = min
    this._max = max
  }
}

export abstract class Int extends NumericArray {
  public static get(size = 0) {
    return new Array(size).fill(null).map(() => getRandomInt(this._min, this._max))
  }
}

export abstract class Float extends NumericArray {
  public static get(size = 0) {
    return new Array(size).fill(null).map(() => getRandomFloat(this._min, this._max))
  }
}

export abstract class Char extends DataArray<string> {
  public static get(size = 0) {
    return new Array(size).fill(null).map(() => getRandomChar())
  }
}
