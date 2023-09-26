const loading = document.querySelector(".loading");

window.addEventListener("load", function () {
  showPage();
});
function showPage() {
  const timeLimit = 5;
  let i = 0;
  loading.style.opacity = 0;
  const timer = setInterval(function () {
    i++;
    if (i == timeLimit) {
      clearInterval(timer);
      loading.style.opacity = 1;
    }
  }, 1000);
}

const inputField = document.getElementById("inputField");

inputField.addEventListener("keydown", (event) => {
  if (event.key === " ") {
    event.preventDefault();
    const Position = inputField.selectionStart;
    const BeforeCursor = inputField.value.substring(0, Position - 1);
    const AfterCursor = inputField.value.substring(Position);
    inputField.value = BeforeCursor + AfterCursor;

    inputField.setSelectionRange(Position - 1, Position - 1);
  } else if (event.key === "Backspace") {
    event.preventDefault();
    const Position = inputField.selectionStart;
    inputField.value =
      inputField.value.substring(0, Position) +
      " " +
      inputField.value.substring(Position);

    inputField.setSelectionRange(Position + 1, Position + 1);
  }
});
