import createPopover from "./createPopover";

window.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector(".btn");

  btn.addEventListener("click", () => {
    const btn = document.querySelector(".btn");
    createPopover(btn);
  });
});
