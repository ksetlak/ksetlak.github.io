const URL =
  "https://corsproxy.io/?" +
  encodeURIComponent(
    "https://api.whatpulse.org/user.php?user=Saviran&format=json"
  );

(function fill_whatpulse() {
  fetch(URL)
    .then((res) => res.json())
    .then((data) => {
      const div = document.getElementById("whatpulse");
      div.innerHTML = `Keys: ${data.Keys}<br>Clicks: ${data.Clicks}<br>Rank (Keys): ${data.Ranks.Keys}<br>Rank (Clicks): ${data.Ranks.Clicks}`;
    });
})();
