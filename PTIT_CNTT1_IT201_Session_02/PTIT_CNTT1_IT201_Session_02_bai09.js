const students= {
    name:"Dev",
    age: 20,
    listMonHoc:[
        {subject: "Math", score: 9},
        {subject: "English", score: 3},
        {subject: "Physics", score: 2},
        {subject: "Literature", score: 9},
    ]
}
const averageScore = (subject) =>{
    const sum = subject.reduce((a,b) => a + b.score,0 );
    let des;
    if(sum >= 8.5) des = "Gioi"
    else if(sum >= 7)des = "kha"
    else if(sum >= 5) des ="TB"
    else if(sum < 5) des = "Yeu"
    return `${(sum / subject.length).toFixed(2)} -> ${des} `
}

const highScore = (subject) => {
    const max = Math.max(...subject.map(s => s.score));
    const sub = subject.find(s => s.score === max);
    return `${sub.subject} (${sub.score})`;
}
const minScore = (subject) => {

    const max = Math.min(...subject.map(s => s.score));
    const sub = subject.find(s => s.score === max);
    return `${sub.subject} (${sub.score})`;

}

const getStudentSummary = (students) =>{
    console.log(`${students.name} is ${students.age} years old.`)
    console.log(`Average score: ${averageScore(students.listMonHoc)}`);
    console.log("Best subject(s): " +  highScore(students.listMonHoc));
    console.log(`weakest: ${minScore(students.listMonHoc)}`)
}

getStudentSummary(students);
