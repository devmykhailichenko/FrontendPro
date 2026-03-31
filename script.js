// // const promise = new Promise((resolve, reject) => {
// //     setTimeout(() => {
// //         const success = false;
// //
// //         if (success) {
// //             resolve({success: true, img: "https://example.img.jpg"});
// //         } else {
// //             reject({success: false, img: ""});
// //         }
// //     }, 1000);
// // });
// //
// // promise
// //     .then((result) => {
// //       console.log("Result:", result);
// //     })
// //     .catch((error) => {
// //         console.log("Error:", error);
// //     })
// //     .finally(() => {
// //         console.log("Finished...");
// //     });
// //
//
// //1 6 3 8 4 5 2
// // console.log(1);
// //
// // setTimeout(() => {
// //     console.log(2);
// // }, 0);
// //
// // Promise.resolve().then(() => {
// //     console.log(3);
// //     console.log(8);
// // });
// //
// // Promise.resolve().then(() => {
// //     console.log(4);
// // });
// //
// // Promise.resolve().then(() => {
// //     console.log(5);
// // });
// //
// // console.log(6);
//
// const promise1 = Promise.resolve({name: "Alex"});
// const promise2 = Promise.resolve({bankBalance: 500});
// const promise3 = Promise.reject("Error in 3!!!");
// const promise4 = new Promise(resolve => setTimeout(() => {
//     resolve(4);
// }, 2000));
//
// Promise.all([promise1, promise2, promise3, promise4]).then(
//     (results) => {
//         console.log(results);
//     }
// ).catch(error => console.log(error));
//
// Promise.allSettled([promise1, promise2, promise3, promise4]).then((results) => {
//     console.log(results);
// });
//
// const p1 = new Promise(resolve => setTimeout(
//     () => resolve("First"), 2000)
// );
//
// const p2 = new Promise(reject => setTimeout(
//     () => reject("Second"), 1000)
// );
//
// Promise.race([p1, p2]).then(results => {
//     console.log(results);
// });
//
// // ??????
// Promise.any([p1, p2])
//     .then(results => {
//         console.log("Any!", results);
//     })
//     .catch(error => console.log(error));
//
//
//
// const promise1 = Promise.reject(new Error("error"));
// const promise2 = new Promise((resolve) => setTimeout(resolve, 100, "quick"));
// const promise3 = new Promise((resolve) => setTimeout(resolve, 500, "slow"));
//
// const promises = [promise1, promise2, promise3];
//
// Promise.any(promises).then((value) => console.log(value));

// function createTodo(todo) {
//     return fetch("https://jsonplaceholder.typicode.com/todos", {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//             "Accept": "application/json",
//         },
//         body: JSON.stringify(todo)
//     }).then((response) => {
//         console.log(response);
//         return response.json();
//     }).then((data) => {
//         return data;
//     }).catch((error) => {
//         console.error(error);
//     })
// }
//
// createTodo({
//     title: "First todo!",
//     completed: false,
//     userId: 1
// }).then(data => {
//     console.log(data)
// });
//
// function deleteTodo(id) {
//     return fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
//         method: "DELETE",
//         headers: {
//             "Content-Type": "application/json",
//             "Accept": "application/json",
//         },
//     }).then((response) => {
//         console.log("Delete", response);
//         return response.json();
//     }).then((data) => {
//         return data;
//     }).catch((error) => {
//         console.error(error);
//     })
// }
//
// deleteTodo(1).then(data => {
//     console.log("After delete", data)
// });
//
// //async await
//
// function getTodo(id) {
//     return fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
//         method: "GET",
//         headers: {
//             "Content-Type": "application/json",
//             "Accept": "application/json",
//         },
//     }).then((response) => {
//         return response.json();
//     }).then((data) => {
//         return data;
//     }).catch((error) => {
//         console.error(error);
//     })
// }
//
// getTodo(6).then((todo) => {
//     console.log(todo);
// });
//
// async function getAsyncTodo(id) {
//     const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
//         method: "GET",
//         headers: {
//             "Content-Type": "application/json",
//             "Accept": "application/json",
//         },
//     });
//
//     const data = await response.json();
//
//     return data;
// }
//
// getAsyncTodo(7).then(data => {console.log(data)});

//Initialization
const BASE_URL = "https://jsonplaceholder.typicode.com";

const loadUsersBtn = document.querySelector("#load-users-btn");
const loadPostsBtn = document.querySelector("#load-posts-btn");
const createPostsBtn = document.querySelector("#create-posts-btn");

const usersStatus = document.querySelector("#user-status");
const postsStatus = document.querySelector("#posts-status");

const usersList = document.querySelector("#users-list");
const postsList = document.querySelector("#posts-list");
const selectedUserInfo = document.querySelector("#selected-user-info");

let currentPosts = [];
let users = [];
let selectedUser = null;

//API functions
async function getUsers() {
    try {
        const response = await fetch(`${BASE_URL}/users`);

        if(!response.ok) {
            throw new Error("Bad request")
        }

        return await response.json();
    } catch (error) {
        console.warn(error);
        return [];
    }
}

async function getPostsByUserId(userId) {
    try {
        const response = await fetch(`${BASE_URL}/posts?userId=${userId}`);

        if(!response.ok) {
            throw new Error("Bad request")
        }

        return await response.json();
    } catch (error) {
        console.warn(error);
        return [];
    }
}

async function createPost(postData) {
    try {
        const response = await fetch(`${BASE_URL}/posts`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(postData),
        });

        if(!response.ok) {
            throw new Error("Bad request")
        }

        return await response.json();
    } catch (error) {
        console.warn(error);
        return {};
    }
}

async function deletePostById(postId) {
    try {
        const response = await fetch(`${BASE_URL}/posts/${postId}`, {
            method: "DELETE",
        });

        if(!response.ok) {
            throw new Error("Bad request")
        }

        return response.status === 200;
    } catch (error) {
        console.warn(error);
        return false;
    }
}

//UI functions
function renderUsers(users) {
    usersList.innerHTML = "";

    users.forEach(user => {
        const li = document.createElement("li");

        li.dataset.id = user.id;

        li.innerHTML = `
                    <strong>${user.name}</strong><br>
                    <small>${user.email}</small>
        `;

        if(selectedUser && selectedUser.id === user.id) {
            li.classList.add("active");
        }

        usersList.append(li);
    });
}

function renderPosts(posts) {
    postsList.innerHTML = "";

    if(!posts.length) {
        postsList.innerHTML = "<p>У користувача немає постів!</p>";
    }

    posts.forEach(post => {
        const postEl = document.createElement("article");
        postEl.className = "post-card";

        postEl.innerHTML = `
            <h3>${post.title}</h3>
            <p>${post.body}</p>
            <button class="delete-btn" data-id=${post.id}>Видалити пост</button>
        `;

        postsList.append(postEl);
    });
}

//Event listeners
usersList.addEventListener("click", e => {
    const userIndex = users.findIndex(user => user.id === Number(e.target.dataset.id));

    selectedUser = users[userIndex];

    selectedUserInfo.textContent = `Обрано: ${selectedUser.name} (id: ${selectedUser.id})`;

    postsList.innerHTML = "";
    postsStatus.textContent = "";

    for (let i = 0; i < usersList.children.length; i++) {
        if(usersList.children[i] === e.target) {
            e.target.classList.add("active");
        } else {
            usersList.children[i].classList.remove("active");
        }
    }
});

postsList.addEventListener("click", async (e) => {
    const postId = Number(e.target.dataset.id);

    postsStatus.textContent = `Видаляємо пост #${postId}`;

    const deleted = await deletePostById(postId);

    if(deleted) {
        currentPosts = currentPosts.filter(item => item.id !== postId);

        renderPosts(currentPosts);

        postsStatus.textContent = `Пост #${postId} видалено успішно!`;
    }
});

loadUsersBtn.addEventListener("click", async () => {
    usersStatus.textContent = "Loading users...";

    users = await getUsers();

    renderUsers(users);

    usersStatus.textContent = "";
});

loadPostsBtn.addEventListener("click", async () => {
    if(!selectedUser) {
        postsStatus.textContent = "Оберіть користувача!";
        return;
    }

    postsStatus.textContent = "Завантажуємо пости....";

    currentPosts = await getPostsByUserId(selectedUser.id);

    renderPosts(currentPosts);

    postsStatus.textContent = `Отримано: ${currentPosts.length}`;
});

createPostsBtn.addEventListener("click", async () => {
    if(!selectedUser) {
        postsStatus.textContent = "Спочатку оберіть користувача!";
        return;
    }

    postsStatus.textContent = "Створення посту!";

    const postData = {
        userId: selectedUser.id,
        title: "New Post",
        body: "My first post for this blog"
    };

    const newPost = await createPost(postData);

    currentPosts.unshift(newPost);

    renderPosts(currentPosts);

    postsStatus.textContent = `Пост створений успішно!`;
});