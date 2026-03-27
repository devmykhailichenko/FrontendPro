// function getUser(callback) {
//     setTimeout(() => {
//         const user = { id: 1, name: "Alex"};
//
//         console.log("1. User received!");
//
//         callback(user);
//     }, 1000);
// }
//
// function getPosts(userId, callback) {
//     setTimeout(() => {
//         const posts = [
//             { id: 101, title: "First Post" },
//             { id: 102, title: "Second Post" },
//         ];
//
//         console.log("2. Posts received!");
//
//         callback(posts);
//     }, 1000);
// }
//
// function getComments(postId, callback) {
//     setTimeout(() => {
//        const comments = [
//            { id: 1001, title: "First Comment" },
//            { id: 1002, title: "Second Comment" },
//        ];
//
//        console.log("3. Comments received!");
//
//        callback(comments);
//     }, 1000);
// }
//
// // Callback hell
// getUser((user) => {
//     console.log("User:", user);
//
//     getPosts(user.id, (posts) => {
//         console.log("Posts: ", posts);
//
//         getComments(posts[0].id, (comments) => {
//             console.log("Displaying comments:", comments);
//         });
//     });
// });
//
// // Promise
// const myPromise = new Promise((resolve, reject) => {
//     console.log("I'm from Promise!");
//
//     setTimeout(() => {
//         const success = false;
//
//         if(success) {
//             resolve("Data received!");
//         } else {
//             reject("My Error!");
//         }
//     }, 2000);
// });
//
// myPromise
//     .then((result) => {
//         console.log("Result:", result);
//     })
//     .catch((err) => {
//         console.log("Error:", err);
//     })
//     .finally(() => {
//         console.log("Finished...");
//     });

function getUserP() {
    //....

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const user = { id: 1, name: "Alex"};
            const success = true;

            if(success) {
                console.log("1. User received!");

                resolve(user);
            } else {
                reject("Not found!");
            }
        }, 1000);
    });
}

function getPostsP(userId) {
    //....

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const posts = [
                { id: 101, title: "First Post" },
                { id: 102, title: "Second Post" },
            ];

            const success = true;

            if(success) {
                console.log("2. Posts received!");

                resolve(posts);
            } else {
                reject("Posts not found!");
            }
        }, 1000);
    });
}

function getCommentsP(postId) {
    //....

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const comments = [
                { id: 1001, title: "First Comment" },
                { id: 1002, title: "Second Comment" },
            ];

            const success = true;

            if(success) {
                console.log("3. Comments received!");
                resolve(comments);
            } else {
                reject("Comments not found!");
            }
        }, 1000);
    });
}

getUserP()
    .then(user => {
        console.log("User:", user);
        return getPostsP(user.id);
    })
    .then(posts => {
        console.log("Posts:", posts);
        return getCommentsP(posts[0].id);
    })
    .then(comments => {
        console.log("Comments:", comments);
    })
    .catch(err => {
        console.log("Error:", err);
    });

function renderTodos(todos) {

}

function getTodos() {
    return fetch("https://jsonplaceholder.typicode.com/todos").then((response) => {
        return response.json();
    });
}

getTodos().then(todos => {
    renderTodos(todos);
});

//Homework
const url = `https://api.openweathermap.org/data/2.5/weather?lat={56.3}&lon={30.23}&appid={sdfsdfsdf665sd64fs6df6}`;

function renderWeather(weatherData) {

}

fetch(url).then(response => response.json()).then((data) => {
    console.log(data);
})