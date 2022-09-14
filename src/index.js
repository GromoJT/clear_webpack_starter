console.log(123);
import {v4 as uuidv4} from 'uuid';
import generateJoke from "./generateJoke";
import './styles/main.scss'
import grafika from './assets/grafika.jpg'

const baner = document.getElementById("banner-img")

baner.src=grafika;

const jokeBtn = document.getElementById('jokeBtn');
jokeBtn.addEventListener('click',generateJoke)
generateJoke()

console.log(generateJoke());
console.log(uuidv4());
console.log(1)
console.log(2)