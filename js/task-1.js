"use strict";

const categoriesList = document.querySelector("#categories");

const categoriesItems = document.querySelectorAll(".item");

console.log(`Number of categories: ${categoriesItems.length}`);

categoriesItems.forEach((category) => {
  const title = category.querySelector("h2").textContent;

  const itemCount = category.querySelectorAll(".categories-list-item").length;

  console.log(`Category: ${title}`);
  console.log(`Elements: ${itemCount}`);
});