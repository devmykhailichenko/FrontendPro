import { sayHello } from './helpers.js';
import axios from 'axios';
import './styles.css';

console.log(sayHello('Студент'));

axios.get('https://jsonplaceholder.typicode.com/todos/1')
    .then(function (response) {
        console.log('Дані з сервераffffff:', response.data);
    })
    .catch(function (error) {
        console.error('Помилка:', error);
    });