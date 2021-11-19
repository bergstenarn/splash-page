const { body } = document;

function changeBackground(number) {
  // Check if background already showing
  let previousBackground;
  if (body.className) {
    previousBackground = body.className;
  }
  // Reset CSS class for body
  body.className = "";
  switch (number) {
    case "1":
      previousBackground === "background-1" ||
        body.classList.add("background-1");
      break;
    case "2":
      previousBackground === "background-2" ||
        body.classList.add("background-2");
      break;
    case "3":
      previousBackground === "background-3" ||
        body.classList.add("background-3");
      break;
    default:
      break;
  }
}
