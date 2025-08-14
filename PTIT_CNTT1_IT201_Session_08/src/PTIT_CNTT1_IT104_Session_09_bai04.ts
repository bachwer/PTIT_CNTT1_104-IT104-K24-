type Merge<L, R> = Omit<L, keyof R> & R;


function mergeObjects<T extends object, U extends object>(left: T, right: U): Merge<T, U> {
    return { ...left, ...right } as Merge<T, U>;
}
const a = { id: 1, name: "Alice", tag: "A" };
const b = { email: "a@ex.com", tag: "B" };

const merged1 = mergeObjects(a, b);
console.log(merged1);