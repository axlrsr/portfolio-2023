export function splitText(element, split = "") {
  const text = element.innerText.split(split);
  element.innerHTML = "";

  text.forEach((char) => {
    const spanEl = document.createElement("span");
    spanEl.innerHTML = char + split;

    element.appendChild(spanEl);
  });
}
