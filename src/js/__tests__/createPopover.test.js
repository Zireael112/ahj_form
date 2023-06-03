import createPopover from "../createPopover";
import "jest";

test("should return true", () => {
  window.addEventListener(
    ("DOMContentLoaded",
    () => {
      expect(createPopover()).toBe(true);
    })
  );
});

test("should return false", () => {
  window.addEventListener(
    ("DOMContentLoaded",
    () => {
      const popover = document.createElement("div");
      popover.classList.add("popover");
      expect(createPopover()).toBe(false);
    })
  );
});
