class Tree<Type> {
  private _root: Type | null = null
  public constructor() {
    console.log(this._root)
  }
}

export default Tree
