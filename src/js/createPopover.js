export default function createPopover(btn) {
  const popoverExists = document.querySelector(".popover");

  if (popoverExists) {
    popoverExists.remove();
    return false;
  }

  const popover = document.createElement("div");
  const popoverTitle = document.createElement("div");
  const popoverContent = document.createElement("div");
  const popoverTitleText = document.createElement("div");
  const arrow = document.createElement("div");
  const right = btn.getBoundingClientRect().right;
  const bottom = btn.getBoundingClientRect().bottom;
  const formm = document.querySelector("form");

  popover.classList.add("popover");
  popoverTitle.classList.add("popoverTitle");
  popoverContent.classList.add("popoverContent");
  popoverTitleText.classList.add("popoverTitleText");
  arrow.classList.add("arrow");

  popoverTitleText.textContent = "Popover title";
  popoverContent.textContent =
    "And here's some amazing content. It's very engaging. Right?";
  popover.style.right =
    right - (formm.offsetWidth - popover.offsetWidth) - 27 + "px";
  popover.style.top = bottom - 111 + "px";

  document.body.appendChild(popover);
  popover.appendChild(popoverTitle);
  popover.appendChild(popoverContent);
  popover.appendChild(arrow);
  popoverTitle.appendChild(popoverTitleText);
  return true;
}
