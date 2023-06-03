/* eslint-disable jest/valid-expect */
import createPopover from "../createPopover";
import "jest";

test("should return true", () => {
  const btn = document.querySelector(".btn");
  expect(createPopover(btn)).toBe(true);
});

test("should return false", () => {
  const btn = document.querySelector(".btn");
  const popover = document.createElement("div");
  popover.classList.add("popover");
  expect(createPopover(btn)).toBe(false);
});
