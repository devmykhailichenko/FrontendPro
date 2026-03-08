// Доробити валідацію для надсилання повідомлення з використанням регулярних виразів:
//
//     Поля:
//
//         Name - обов'язкове текстове поле
// Message - текстове поле не менше 5 символів
// Phone number - обов'язкове поле типу phone. З початком на +380
// Email - email обов'язково повинен мати @ та крапку
// Після відправки, в консоль відображаємо дані, які ввів користувач.
//
//     Під час помилки показувати її під полем.

//1) Зберігаємо regex в змінних
const EMAIL_REGEX = /.+@.+\..+/;
const PHONE_REGEX = /^\+380\d{9}$/; //

//2) Витягнути форму
const formLogin = document.querySelector("#formLogin");

//3) Дістати поля з форми:
formLogin.addEventListener("submit", function(e) {
    e.preventDefault();

    const formData = new FormData(this);

    const name = formData.get("name");
    const message = formData.get("message");
    const phone = formData.get("phone");
    const email = formData.get("email");

    //Просто перевіримо чи правильно витягуємо (цей console.log треба буде видалити):
    console.log("Чи витягнули:", name, message, phone, email);

    //Треба додати перевірки:
    if(!EMAIL_REGEX.test(email)) { //Якщо email не правильний, то треба буде додати це під поле під email. Зараз я додав просто console.log
        console.log("Не правильний email");
        return; //Це для того, щоб далі валідація не пішла, поки не буде введено правильний email
    }

    if(!PHONE_REGEX.test(phone)) {
        console.log("Не правильний phone"); //Замість консолі треба під поле додати текст
        return;
    }

    if(name.length === 0) { //Це можна спростити
        console.log("Не правильне ім'я");
        return;
    }

    if(message.length < 5) { //Це можна спростити
        console.log("Message повинно бути не менше 5 символів");
        return;
    }

    //Ми сюди не дійдемо, поки всі попередні if не пройдуть
    console.log("Дані користувача валідні:", name, message, phone, email);
    this.reset();
});