document.addEventListener("DOMContentLoaded", function () {
  const copyButtons = document.querySelectorAll(".info-item");
  const copyMessage = document.getElementById("copyMessage");

  copyButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      const text = button.dataset.copy;

      navigator.clipboard
        .writeText(text)
        .then(function () {
          copyMessage.textContent = text + " 복사되었습니다.";
          copyMessage.classList.add("show");

          setTimeout(function () {
            copyMessage.classList.remove("show");
          }, 1500);
        })
        .catch(function () {
          copyMessage.textContent = "복사에 실패했습니다.";
          copyMessage.classList.add("show");
        });
    });
  });
});