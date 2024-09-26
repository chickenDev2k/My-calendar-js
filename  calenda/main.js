const yearNameEl = document.querySelector("#year-name");
const monthNameEl = document.querySelector("#month-name");
const dayNameEl = document.querySelector("#day-name");
const dayNumEl = document.querySelector("#day-number");

const date = new Date();
const year = date.getFullYear();

const day = console.log(date.getDate());

yearNameEl.innerHTML = date.getFullYear();
monthNameEl.innerText = date.toLocaleString("en", {
    month: "long",
});
dayNameEl.innerText = date.toLocaleString("en", {
    weekday: "long",
});
dayNumEl.innerText = date.getDate();
