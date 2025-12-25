function calculateEHP() {
  let health = Number(document.getElementById("health").value);
  let defense = Number(document.getElementById("defense").value);

  if (health <= 0 || defense < 0) {
    document.getElementById("result").innerText =
      "Unknown number";
    return;
  }

  let ehp = health * (1 + defense / 100);

  document.getElementById("result").innerText =
    "Effect Health (EHP): " + Math.round(ehp);
}
