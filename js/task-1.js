const categoriesList = document.querySelector("#categories");
const categories = categoriesList.querySelectorAll(".item");
console.log("Number of categories:", categories.length);

categories.forEach(category => {
  const categoryTitle = category.querySelector("h2").textContent;
  console.log("Category:", categoryTitle);
  const categoryElements = category.querySelectorAll("li").length;
  console.log("Elements:", categoryElements);
});

