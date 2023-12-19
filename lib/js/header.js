const button = document.getElementById("logout");
export function logoutButton() {
  button.addEventListener("click", () => {
    console.log("Salgo de la sessión");
  });
}
