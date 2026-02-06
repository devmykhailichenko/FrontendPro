// const students = [];
// let sum = 0;
//
// while (true) {
//     const input = prompt("Enter student name and mark (name,mark):");
//
//     if(input === null || input === "STOP") {
//         break;
//     }
//
//     const parts = input.split(",");
//
//     const student = {
//         name: parts[0],
//         score: Number(parts[1])
//     };
//
//     students.push(student);
// }
//
// for(const student of students) {
//     console.log(
//         "Students name:", student.name, "score ----->", student.score
//     );
// }
//
// for(let i = 0; i < students.length; i++) {
//     sum += students[i].score;
// }
//
// console.log("Average score:", sum / students.length);
// let bestScore = 0;
// let bestStudentIndex = 0;
//
// for(let i = 0; i < students.length; i++) {
//     if(students[i].score > bestScore){
//         bestScore = students[i].score;
//         bestStudentIndex = i;
//     }
// }
//
// console.log("Best student:", students[bestStudentIndex].name, "with a score:", bestScore);

const book = {
    contacts: [
        {
            name: "John",
            phone: "0123456789",
            email: "john@gmail.com"
        },
        {
            name: "Alice",
            phone: "0123456789",
            email: "john@gmail.com"
        },
        {
            name: "Bob",
            phone: "0123456789",
            email: "john@gmail.com"
        },
    ],
};

while(true) {
    const input = prompt("Enter Дія: add or search. Stop to end");

    if(input === null || input === "Stop") {
        break;
    }

    if(input === "add") {
        const userData = prompt("Enter phone data: name/phone/email");
        const parts = userData.split("/");

        const newRecord = {
            name: parts[0],
            phone: parts[1],
            email: parts[2]
        };

        book.contacts.push(newRecord);
    }

    if(input === "search") {
        console.log("Searching....");
        const searchName = prompt("Enter name:");

        let notFound = true;
        for(let i = 0; i < book.contacts.length; i++) {
            if(book.contacts[i].name === searchName) {
                console.log("FOUND! >>>>", book.contacts[i]);
                notFound = false;
                break;
            }
        }

        if(notFound) {
            console.log("Not Found!");
        }
    }
}

console.log("Result contacts:", book);