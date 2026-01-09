function generate_link(phone_number, message) {
  return `https://api.whatsapp.com/send/?phone=${phone_number}&text=${encodeURIComponent(
    message
  )}&type=phone_number&app_absent=0`;
}

document.addEventListener("DOMContentLoaded", () => {
  const phoneInput = document.getElementById("phone");
  const messageInput = document.getElementById("message");
  const resultInput = document.getElementById("result");
  const resultBox = document.getElementById("resultBox");
  const openLink = document.getElementById("openLink");
  const copyBtn = document.getElementById("copyBtn");

  function updateLink() {
    const phone = phoneInput.value.trim();
    const message = messageInput.value.trim();

    if (!phone || !message) {
      resultBox.style.display = "none";
      return;
    }

    const link = generate_link(phone, message);

    resultInput.value = link;
    openLink.href = link;
    resultBox.style.display = "block";
  }

  phoneInput.addEventListener("input", updateLink);
  messageInput.addEventListener("input", updateLink);

  copyBtn.addEventListener("click", () => {
    resultInput.select();
    document.execCommand("copy");
    copyBtn.textContent = "Copied!";
    setTimeout(() => (copyBtn.textContent = "Copy"), 1500);
  });
});
