const h1_name = document.querySelector("#h1-name");
const animationSpeed = 300;

function getTextWidth(element, text) {
  const tempSpan = document.createElement("span");
  tempSpan.style.visibility = "hidden";
  tempSpan.style.whiteSpace = "nowrap";
  tempSpan.style.font = window.getComputedStyle(element).font;
  tempSpan.innerHTML = text;

  document.body.appendChild(tempSpan);
  const width = tempSpan.offsetWidth;
  document.body.removeChild(tempSpan);
  return width * 1.01;
}

function createAndInsertStyleElement() {
  const style = document.createElement("style");
  document.head.appendChild(style);
  return style;
}

let style = document.querySelector("style") || createAndInsertStyleElement();

style.sheet.insertRule(
  `
  #h1-name {
    opacity: 1;
    transition: all ${animationSpeed / 1000}s ease-in-out;
    display: inline-block;
    white-space: nowrap;
    /* overflow: hidden; TODO: Learn how overflow works and decide if it's OK to remove this. */
  }
`,
  style.sheet.cssRules.length
);

addEventListener("load", (event) => {
  h1_name.style.width = `${getTextWidth(h1_name, h1_name.innerHTML)}px`;
});

// FIXME: On the first firing of the event the element flashes briefly.
// FIXME: The flag does not display correctly in Chrome on Windows -- needs a polyfill, but one included with the page.
// FIXME: Element height unnecessarily changes in Chrome causing the surname to jump up and down.
h1_name.addEventListener("mouseenter", (event) => {
  event.target.style.opacity = 0;
  const newWidth = getTextWidth(
    h1_name,
    "&#127477;&#127473; Krzysztof (/ˈkʂɘʂ.tɔf/)"
  );
  setTimeout(() => {
    event.target.innerHTML = "&#127477;&#127473; Krzysztof (/ˈkʂɘʂ.tɔf/)";
    event.target.style.width = `${newWidth}px`;
    event.target.style.opacity = 1;
  }, animationSpeed);
});

h1_name.addEventListener("mouseleave", (event) => {
  event.target.style.opacity = 0;
  const newWidth = getTextWidth(h1_name, "Chris");
  setTimeout(() => {
    event.target.innerHTML = "Chris";
    event.target.style.width = `${newWidth}px`;
    event.target.style.opacity = 1;
  }, animationSpeed);
});
