var write = document.querySelector(".btn-write");
var popup = document.querySelector(".popup");
var close = document.querySelector(".modal-close");
var form = popup.querySelector(".contact-form");
var user_name = popup.querySelector("[name=user-name]");
var email = popup.querySelector("[name=email]");


write.addEventListener("click", function (evt) {
  evt.preventDefault();
  console.log("Клик по кнопке написать нам");
  popup.classList.add("modal-show");
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
});
window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (popup.classList.contains("modal-show")) {
        popup.classList.remove("modal-show");
      }
    }
  });
close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
  popup.classList.remove("modal-error");
});

form.addEventListener("submit", function (evt) {
  if (!user_name.value || !email.value) {
    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error"); }
});
