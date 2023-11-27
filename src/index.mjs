import "./styles.css";

const form = document.querySelector("form");
const inputs = document.querySelectorAll(
  'input[type="text"], input[type="password"] ',
);
const pEmail = document.getElementById("p-bar");

// CONTAINER servant de base pour la Errordisplay
// const pseudoContainer = document.querySelector(".pseudo-container");
// const errorPseudo = document.querySelector(".pseudo-container > span");

//FONCTION ERRORDISPLAY pseudo email password confirm pepc
const errorDisplay = (pepc, message, valid) => {
  const pepcContainer = document.querySelector("." + pepc + "-container");
  const pepcError = document.querySelector("." + pepc + "-container > span ");
  if (!valid) {
    pepcContainer.classList.add("error");
    pepcError.textContent = message;
  } else {
    pepcContainer.classList.remove("error");
    pepcError.textContent = message;
  }
};

let pseudo, email, password, confirm;
// CHECK
// Pseudo
const pseudoCheck = (value) => {
  if (value.length > 0 && (value.length < 3 || value.length > 20)) {
    errorDisplay(
      "pseudo",
      "Le pseudo doit contenir au minimum 3, et au maximum 20 caractéres ! ",
    );
    pseudo = null;
  } else if (!value.match(/^[a-zA-Z0-9_.-]*$/)) {
    errorDisplay(
      "pseudo",
      "Le pseudo ne doit pas contenir de caractéres spéciaux",
    );
    pseudo = null;
  } else {
    errorDisplay("pseudo", "", true);
    pseudo = value;
  }
};
// Email
const emailCheck = (value) => {
  if (
    !value.match(
      /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
    )
  ) {
    errorDisplay("email", "L'email n'est pas valide");
    email = null;
  } else {
    errorDisplay("email", "", true);
    email = value;
  }
};
const passwordCheck = (value) => {
  if (
    !value.match(
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
    )
  ) {
    pEmail.classList.add("pRed");
    errorDisplay(
      "password",
      "Minimum de 8 caractéres, un majuscule, un miniscule et un caractére spécial",
      (password = null),
    );
  } else if (value.length < 12) {
    pEmail.classList.add("pBlue");
    errorDisplay("password", "", true);
    password = value;
  } else {
    pEmail.classList.add("pGreen");
    errorDisplay("password", "", true);
    password = value;
  }
  if (confirm) confirmCheck(confirm);
};
const confirmCheck = (value) => {
  if (value != password) {
    errorDisplay("confirm", "Les mots de passe ne correspondent pas ");
    confirm = false;
  } else {
    errorDisplay("confirm", "", true);
    confirm = true;
  }
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

//ADD EVEN LISTENER
form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!pseudo || !email || !password || !confirm) {
    alert("Veuillez remplir correctement les champs");
  } else {
    alert(`Bravo ${pseudo} !! Votre inscription est validée..`);
    pseudo = "";
    email = "";
    password = "";
    confirm = "";
    inputs.forEach((input) => (input.value = ""));
    pEmail.classList = "";
  }
});
