import dummyText from "./utils/httpReq.js";

const amountInput = document.getElementById("amount");
const generateBtn = document.querySelector("button");
const textResult = document.getElementById("result");
const copyBtn = document.querySelector(".copy");

const showError = (message) => {
  textResult.innerHTML = message;
  setTimeout(() => {
    textResult.innerHTML = "";
    textResult.style.display = "none";
  }, 2000);
};

const generateText = (e) => {
  e.preventDefault();

  const inputVal = +amountInput.value;
  // بررسی ورودی و اعلام خطا در صورت عدم وارد کردن مقدار
  if (!inputVal || isNaN(inputVal)) {
    showError("چیزی وارد نشده!");
    return;
  }

  const generateRandomText = () => {
    const randomTextIndex = Math.floor(Math.random() * dummyText.length);
    return `<p>${dummyText[randomTextIndex]}</p>`;
  };

  const finalText = Array.from({ length: inputVal }, generateRandomText).join(
    ""
  );
  textResult.innerHTML = finalText;
};
// تعریف عملگر کپی کردن
const copyText = () => {
  // انتخاب محتوای متن نهایی
  textResult.select();
  // اجرای عملیات کپی کردن
  document.execCommand("copy");
  // حذف انتخاب متن
  window.getSelection().removeAllRanges();
};

// اضافه کردن رویداد کلیک به دکمه کپی کردن
copyBtn.addEventListener("click", copyText);
generateBtn.addEventListener("click", generateText);
