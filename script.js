document.addEventListener("DOMContentLoaded", function () {
  console.log("웹명함 카드가 정상적으로 로드되었습니다.");

  const emailLink = document.querySelector(".email-copy");

  if (!emailLink) {
    console.warn("이메일 복사 대상이 없습니다.");
    return;
  }

  emailLink.addEventListener("click", function (event) {
    event.preventDefault();

    const email = emailLink.dataset.email || emailLink.textContent.trim();

    navigator.clipboard
      .writeText(email)
      .then(function () {
        emailLink.textContent = "이메일이 복사되었습니다";

        setTimeout(function () {
          emailLink.textContent = email;
        }, 1500);
      })
      .catch(function () {
        alert("복사에 실패했습니다. 이메일을 직접 선택해서 복사해주세요.");
      });
  });
});