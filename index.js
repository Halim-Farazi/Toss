const formElm = document.querySelector("form");
const team1Name = document.querySelector("#t1input");
const team2Name = document.querySelector("#t2input");
const t1elm = document.querySelector(".t1");
const t2elm = document.querySelector(".t2");
const winner = document.querySelector("#result");
const resetBtnElm = document.querySelector("#resetBtn");

function validateValue(val1, val2) {
  if (val1.trim === "" && val2.trim == "") {
    alert("input a valid number");
    return false;
  } else {
    return true;
  }
}

function tossWinner(T1, T2) {
  return Math.random() > 0.5 ? T1 : T2;
}

function resetValue() {
  T1Name = "";
  T2Name = "";
  t1elm.textContent = "";
  t2elm.textContent = "";
  winner.textContent = "";
}

resetBtnElm.addEventListener("click", (evt) => {
  resetValue();
});

formElm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  resetValue();
  const T1Name = team1Name.value;
  const T2Name = team2Name.value;
  if (!validateValue(T1Name, T2Name)) return;
  t1elm.textContent = T1Name;
  t2elm.textContent = T2Name;
  let tossWinningTeam = tossWinner(T1Name, T2Name);
  winner.textContent = `Toss winner is: ${tossWinningTeam}`;
});
