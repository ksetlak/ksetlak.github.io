// FIXME: The name should not fade in on page load.

const h1_name = document.querySelector("#h1-name");
const animationSpeed = 300;

function createAndInsertStyleElement() {
  const style = document.createElement("style");
  document.head.appendChild(style);
  return style;
}

function getHorizontalPaddingAndBorder(element) { // TODO: Remove if unused.
  const style = window.getComputedStyle(element);
  const padding = parseFloat(style.paddingLeft) + parseFloat(style.paddingRight);
  const border = parseFloat(style.borderLeftWidth) + parseFloat(style.borderRightWidth);
  return padding + border;
}

function getTextWidth(text) {
  const tempSpan = document.createElement('span');
  tempSpan.style.visibility = 'hidden';
  tempSpan.style.whiteSpace = 'nowrap';
  tempSpan.style.font = window.getComputedStyle(h1_name).font;
  tempSpan.innerHTML = text;

  document.body.appendChild(tempSpan);
  const width = tempSpan.width;
  document.body.removeChild(tempSpan);
  return width;
}

let style = document.querySelector("style") || createAndInsertStyleElement();

style.sheet.insertRule(
  `
  #h1-name {
    opacity: 1;
    transition: all ${animationSpeed / 1000}s ease-in-out;
    display: inline-block;
    /* white-space: nowrap; Prevents text wrapping. Let's see what happens without this firstly. TODO: Remove after the "experiment". */
    /* overflow: hidden; Prevents text wrapping. Let's see what happens without this firstly. TODO: Remove after the "experiment". */
  }
`,
  style.sheet.cssRules.length
);

style.sheet.insertRule(
  `
  #h1-name.hide {
    opacity: 0;
    transition: all ${animationSpeed / 1000}s ease-in-out; /* TODO: Try to delete his later; It seems redundant. */
  }
`,
  style.sheet.cssRules.length
);

h1_name.style.width = `${getTextWidth(h1_name.innerHTML)}px`;

// FIXME: Width transitions do not animate.

h1_name.addEventListener("mouseenter", (event) => {
  event.target.classList.add("hide");
  const newWidth = getTextWidth("&#127477;&#127473; Krzysztof (/ˈkʂɘʂ.tɔf/)");
  setTimeout(() => {
    event.target.innerHTML = "&#127477;&#127473; Krzysztof (/ˈkʂɘʂ.tɔf/)"; // FIXME: The flag does not display correctly in Chrome.
    event.target.style.width = `${newWidth}px`;
    event.target.classList.remove("hide");
  }, animationSpeed);
});

h1_name.addEventListener("mouseleave", (event) => {
  event.target.classList.add("hide");
  const newWidth = getTextWidth("Chris");
  setTimeout(() => {
    event.target.innerHTML = "Chris";
    event.target.style.width = `${newWidth}px`;
    event.target.classList.remove("hide");
  }, animationSpeed);
});
