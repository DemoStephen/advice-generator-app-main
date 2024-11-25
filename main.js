const id = document.querySelector("[data-id]");
const quote = document.querySelector("[data-quote]");
const button = document.querySelector("[data-button]");

button.addEventListener("click", (e) => {
  e.preventDefault();
  id.innerText = "0001";
  quote.innerText = "Random Quote";
});
