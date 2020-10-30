import { getElement } from './utils.js';

const button = getElement('.btn');
const quote = getElement('.quote');
const person = getElement('.author');
const targetURL = 'https://type.fit/api/quotes';

button.addEventListener('click', async () => {
  const response = await (await fetch(targetURL)).json();
  const randomNumber = Math.ceil(Math.random() * 1000);
  const selectedQuote = response[randomNumber];
  displayQuote(selectedQuote);
});

const displayQuote = (object) => {
  const { text, author } = object;
  quote.textContent = text;
  person.textContent = `-${author}`;
};
