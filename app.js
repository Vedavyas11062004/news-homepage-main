const togglebar = document.querySelector(".toggle__button");
const ulToggle = document.querySelector(".navul");

togglebar.addEventListener("click", () => {
  let vis = togglebar.getAttribute("aria-expanded");
  console.log(vis);
  if (vis === "false") {
    togglebar.setAttribute("aria-expanded", "true");
    ulToggle.setAttribute("data-expanded", "true");
  } else if (vis === "true") {
    togglebar.setAttribute("aria-expanded", "false");
    ulToggle.setAttribute("data-expanded", "false");
  }
});
