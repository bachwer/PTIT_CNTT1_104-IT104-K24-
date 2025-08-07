const point:number[] = [
    10,9,5,6,7,2,4,6,7,4
]

const avg = point.reduce((a,b) => a + b,0) / point.length

console.log(avg)