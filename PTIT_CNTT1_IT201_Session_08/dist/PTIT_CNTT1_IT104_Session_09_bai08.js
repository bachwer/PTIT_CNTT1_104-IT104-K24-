function partialUpadte(obj, updates) {
    return { ...obj, ...updates };
}
const user = {
    id: 1,
    name: "Alice",
    email: "alice@gmail.com",
    active: true
};
const updateed = partialUpadte(user, { name: "halo" });
console.log(updateed);
export {};
