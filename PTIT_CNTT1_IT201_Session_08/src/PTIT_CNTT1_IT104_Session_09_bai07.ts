function flatten<T>(arr: T[][]):T[] {
    return ([] as T[]).concat(...arr);

}


console.log(flatten( [[1, 2], [3, 4], [5, 6]]))