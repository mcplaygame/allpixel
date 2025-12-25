function calculateMelee() {
  let base = Number(document.getElementById("base").value);
  let strength = Number(document.getElementById("strength").value);
  let crit = Number(document.getElementById("crit").value);
  let bonus = Number(document.getElementById("bonus").value);

  let damage = base * (1 + strength / 100);
  damage *= (1 + crit / 100);
  damage *= (1 + bonus / 100);

  document.getElementById("meleeResult").innerText =
    "Final Damage: " + Math.floor(damage);
}

  function calculateAbility() {
  let base = Number(document.getElementById("abilityBase").value);
  let intel = Number(document.getElementById("intel").value);
  let bonus = Number(document.getElementById("abilityBonus").value);

  let damage = base * (1 + intel / 1000);
  damage *= (1 + bonus / 100);

  document.getElementById("abilityResult").innerText =
    "Ability Damage: " + Math.floor(damage);
}
