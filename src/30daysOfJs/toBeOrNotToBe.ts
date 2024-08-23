/* eslint-disable  @typescript-eslint/no-explicit-any */

type ToBeOrNotToBe = {
  toBe: (val: any) => boolean
  notToBe: (val: any) => boolean
}

export function expect(val: any): ToBeOrNotToBe {
  return {
    toBe: (val2: any): boolean => {
      if (val === val2) return true
      else throw 'Not Equal'
    },
    notToBe: (val2: any): boolean => {
      if (val !== val2) return true
      else throw 'Equal'
    },
  }
}

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */
