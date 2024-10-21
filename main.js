const h1_name = document.querySelector("#h1-name");

h1_name.addEventListener("mouseenter", (event) => {
  event.target.innerHTML = "&#127477;&#127473; Krzysztof (/ˈkʂɘʂ.tɔf/)";
});

h1_name.addEventListener("mouseleave", (event) => {
  event.target.innerHTML = "Chris";
});
