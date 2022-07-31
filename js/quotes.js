const quotes = [
  { quote: "Hell is other people.", author: "Jean-Paul Sartre" },
  { quote: "I think therefore I am.", author: "Rene Descartes" },
  {
    quote:
      "Good friends, good books, and a sleepy conscience: this is the ideal life.",
    author: "Mark Twain",
  },
  { quote: "I am short, fat, and proud of that.", author: "Pooh 🐻" },
  { quote: "Find people who will make you better.", author: "Michelle Obama" },
  { quote: "So many books, so little time.", author: "Frank Frank Zappa" },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;

function showingAuthor() {
  author.classList.toggle("hidden");
}

quote.addEventListener("mouseover", showingAuthor);
