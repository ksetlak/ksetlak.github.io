// Set the initial state.
let dark_mode_slider = document.querySelector("#dark-mode-switch-input");
// TODO: Store user preference in WebStorage or something.
let dark_mode = dark_mode_slider.checked = (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);
document.documentElement.setAttribute('data-dark-mode', dark_mode);

// React to system-wide preference change.
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
  if(event.matches) {
    dark_mode = dark_mode_slider.checked = true;
    document.documentElement.setAttribute('data-dark-mode', 'true');
  } else {
    dark_mode = dark_mode_slider.checked = false;
    document.documentElement.setAttribute('data-dark-mode', 'false');
  }
});

// React to dark_mode_slider state change.
dark_mode_slider.addEventListener('input', function() {
    const darkModeEnabled = dark_mode_slider.checked;
    if (darkModeEnabled) {
        document.documentElement.setAttribute('data-dark-mode', dark_mode = "true");
    } else {
        document.documentElement.setAttribute('data-dark-mode', dark_mode = "false");
    }
});
