function mergeObjects(left, right) {
    return { ...left, ...right };
}
const a = { id: 1, name: "Alice", tag: "A" };
const b = { email: "a@ex.com", tag: "B" };
const merged1 = mergeObjects(a, b);
console.log(merged1);
export {};
