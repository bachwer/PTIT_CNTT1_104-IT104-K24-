function partialUpadte<T>(obj: T, updates: Partial<T>): T {
    return {...obj, ...updates };
}


type User = {
    id: number;
    name: string;
    email: string;
    active: boolean;
}

const user:User = {
    id: 1,
    name: "Alice",
    email: "alice@gmail.com",
    active: true
}


const updateed = partialUpadte(user, {name:"halo"});
console.log(updateed);