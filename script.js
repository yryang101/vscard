document.addEventListener("DOMContentLoaded", function () {
  const copyButtons = document.querySelectorAll(".info-item");
  const copyMessage = document.getElementById("copyMessage");

  copyButtons.forEach(function (button) {
    button.addEventListener("click", async function () {
      const text = button.dataset.copy;

      if (!text) {
        return;
      }

      try {
        await navigator.clipboard.writeText(text);

        copyMessage.textContent = text + " 복사되었습니다.";
        copyMessage.classList.add("show");

        setTimeout(function () {
          copyMessage.classList.remove("show");
          copyMessage.textContent = "";
        }, 1500);
      } catch (error) {
        copyMessage.textContent = "복사에 실패했습니다.";
        copyMessage.classList.add("show");
      }
    });
  });
});