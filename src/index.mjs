import "./styles.css";

const inputs = document.querySelectorAll(
  'input[type="text"], input[type="password"] ',
);
// CHECK
const pseudoCheck = (value) => {
  console.log(value);
};
const emailCheck = (value) => {
  console.log(value);
};
const passwordCheck = (value) => {
  console.log(value);
};
const confirmCheck = (value) => {
  console.log(value);
};

inputs.forEach((input) => {
  input.addEventListener("input", (e) => {
    switch (e.target.id) {
      case "pseudo":
        pseudoCheck(e.target.value);
        break;
      case "email":
        emailCheck(e.target.value);
        break;
      case "password":
        passwordCheck(e.target.value);
        break;
      case "confirm":
        confirmCheck(e.target.value);
        break;
      default:
        null;
    }
  });
});
