/*
Request 1: Click to Change Text.
When the user clicks on the "Welcome Message" block, change text to "Have a Good Time!".
*/

const hero = document.querySelector(".main-header__hero");
const heroTitle = document.querySelector(".hero__title");

hero.addEventListener("click", () => {
  heroTitle.textContent = "Have a Good Time!";
});

/*
Request 2: Click to Show/Close Menu.
When the user clicks the menu at the top-right corner, show the hidden mobile menu. After that, the user can click the close button to hide it.

Hint: you may apply css position:fixed to create a floating mobile menu, which may be out of screen at the beginning and totally separated from the original menu.
 */

const hamburger = document.querySelector(".nav__hamburger");
const navMenuContainer = document.querySelector(".nav__menu__container");
hamburger.addEventListener("click", () => {
  navMenuContainer.style.right = "0px";
  navMenuContainer.style.opacity = "1";
});

const close = document.querySelector(".nav__close");
close.addEventListener("click", () => {
  navMenuContainer.style.right = "-100%";
  navMenuContainer.style.opacity = "0";
});

const menuLinks = document.querySelectorAll(".menu__link");
for (const menuLink of menuLinks) {
  menuLink.addEventListener("click", () => {
    navMenuContainer.style.right = "-100%";
    navMenuContainer.style.opacity = "0";
  });
}

/* 
Request 3: Click to Show More Content Boxes.
There are some more content boxes waiting to show. When the user clicks the Call-to-Action button, show those hidden content boxes.

Hint: all content boxes are already there, they are just set to display:none at the beginning.
*/

const btnCTA = document.querySelector(".main__CTA");
const mainArticle = document.querySelectorAll(".main__article");

btnCTA.addEventListener("click", () => {
  mainArticle[1].classList.remove("hide");
});
