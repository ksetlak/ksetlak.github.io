(async function unlock_proxy() {
  const response = await fetch(
    "https://cors-anywhere.herokuapp.com/https://example.com/",
    {
      headers: {
        "X-Requested-With": "XMLHttpRequest",
      },
    }
  );
  if (response.status === 403) {
    const parser = new DOMParser();
    const responseBody = await response.text();
    const doc = parser.parseFromString(responseBody, "text/html");
    const tokenInput = doc.querySelector('input[name="accessRequest"]');
    const token = tokenInput ? tokenInput.value : null;
    if (!token)
      console.error("Proxy shenanigans have failed at token extraction.");
    console.log(token); // TODO Remove once this works reliably.
    const tokenRequestResponse = await fetch(
      `https://cors-anywhere.herokuapp.com/corsdemo?accessRequest=${token}`
    );
    console.log(
      `Proxy shenanigans probably successful. Status: ${tokenRequestResponse.status}`
    );
  } else if (response.ok) {
    console.log(`Already authorized for proxy. (Status: ${response.status})`); // TODO Remove once this works reliably.
  } else {
    console.error(
      `Proxy shenanigans have failed (not at token extraction). Status: ${response.status}`
    );
    console.dir(response); // TODO Remove once this works reliably.
  }
})();

(function fill_whatpulse() {
  fetch(
    "https://cors-anywhere.herokuapp.com/https://api.whatpulse.org/user.php?user=Saviran&format=json",
    {
      headers: {
        "X-Requested-With": "XMLHttpRequest",
      },
    }
  )
    .then((res) => res.json())
    .then((data) => {
      const div = document.getElementById("whatpulse");
      div.innerHTML = `Keys: ${data.Keys}<br>Clicks: ${data.Clicks}<br>Rank (Keys): ${data.Ranks.Keys}<br>Rank (Clicks): ${data.Ranks.Clicks}`;
    });
})(); // Using IIFE, 'cos I'm so fancy!
