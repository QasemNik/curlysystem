const keyCodeElem = document.querySelector("#keyCode");
const keyElem = document.querySelector("#key");
const locationElem = document.querySelector("#location");
const whichElem = document.querySelector("#which");
const codeElem = document.querySelector("#code");

document.body.addEventListener("keyup", (event) => {
  event.preventDefault();
console.log(event);
  starter.style.display = "none";
  heading.style.display = "flex";
  ascii.style.display = "flex";
  infos.style.display = "flex";

  const eventKeyCode = event.keyCode;
  const key = event.key;
  const location = event.location;
  const which = event.which;
  const code = event.code;

  keyCodeElem.innerHTML = eventKeyCode;
  keyElem.innerHTML = key;
  locationElem.innerHTML = location;
  codeElem.innerHTML = code;
  whichElem.innerHTML = which;
});
