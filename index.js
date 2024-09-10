const formElm = document.querySelector("form");
const team1Name = document.querySelector("#t1input");
const team2Name = document.querySelector("#t2input");
const t1elm = document.querySelector(".t1");
const t2elm = document.querySelector(".t2");
const winner = document.querySelector("#result");

/*
function validateValue(val1, val2) {
  if (val1.trim === "" || typeof val1 !== "string") {
    alert("input a valid number");
    return false;
  } else if (val2.trim == "" || typeof val2 !== "string") {
    alert("input a valid number");
    return false;
  } else {
    return true;
  }
}
*/

function tossWinner(T1, T2) {
  const teams = [T1, T2];
  const index = Math.floor(Math.random() * teams.length);
  const team = teams[index];
  console.log(team);
  return team;
}

formElm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  const T1Name = team1Name.value;
  const T2Name = team2Name.value;
  validateValue(T1Name, T2Name);
  t1elm.textContent = T1Name;
  t2elm.textContent = T2Name;
  let tossWinningTeam = tossWinner(T1Name, T2Name);
  winner.textContent = tossWinningTeam;
});
