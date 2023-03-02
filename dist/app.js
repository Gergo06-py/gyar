const ul = document.querySelector("#ulElem");
var termekek = ["alma", "körte", "barack", "szilva"];

termekek.forEach((termek) => {
  let li = document.createElement("li");
  li.textContent = termek;
  li.classList = "list-group-item sajat";
  ul.append(li);
});
