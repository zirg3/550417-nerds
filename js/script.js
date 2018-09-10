var write = document.querySelector(".btn-write");
var popup = document.querySelector(".popup");

write.addEventListener("click", function (evt) {
  evt.preventDefault();
  console.log("Клик по кнопке написать нам");
  popup.classList.add("modal-show");
});

var close = document.querySelector(".modal-close");

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
});
