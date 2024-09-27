const yearNameEl = document.querySelector("#year-name");
const monthNameEl = document.querySelector("#month-name");
const dayNameEl = document.querySelector("#day-name");
const dayNumEl = document.querySelector("#day-number");
const backEl = document.querySelector(".back");
const nextEl = document.querySelector(".next");

const back = (date) => {
    date.getDate - 1;
};

backEl.addEventListener("click", back);
nextEl.addEventListener("click", back);

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
