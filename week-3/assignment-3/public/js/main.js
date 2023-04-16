const form = document.querySelector("form");
const input = document.querySelector("input");
const btn = document.querySelector("button");
const result = document.querySelector("span");

btn.addEventListener("click", (event) => {
  event.preventDefault();
  const number = input.value;
  const url = `./getData?number=${number}`;
  const config = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  };

  fetch(url, config)
    .then((res) => res.json())
    .then((data) => (result.textContent = `Result: ${data}`))
    .catch((err) => console.log(err));
});
