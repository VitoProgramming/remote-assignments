// Assignment 2: HTML DOM and AJAX

// Complete the functions below to make an AJAX call to a URL by Fetch API, and show the response data in the page. You may render UI with any style.

function ajax(url) {
  // your code here
  return fetch(url).then((res) => res.json());
}
function render(data) {
  // your code here
  const container = document.querySelector(".container");

  let html = "";

  data.forEach(
    (product) =>
      (html += `<article>
      <h2>${product.name}</h2>
  <span>${product.price}</span>
  <p>${product.description}</p>
  </article>`)
  );

  container.innerHTML = html;
}
const url =
  "https://remote-assignment.s3.ap-northeast-1.amazonaws.com/products";

ajax(url).then((data) => {
  render(data);
});
// you should get product information in JSON format and render data in the page and render data in the page.
