export function shellSort<Type>(array: Type[]) {
  if (!array.length)
    return array

  for (let step = Math.floor(array.length / 2); step > 0; step = Math.floor(step / 2))
  {
    for(let pass = step; pass < array.length; pass++)
    {
      for(let replacement = pass - step;
              replacement >= 0 && array[replacement] > array[replacement + step];
              replacement -= step) {
        [array[replacement], array[replacement + step]] = [array[replacement + step], array[replacement]]
      }
    }
  }
  return array
}