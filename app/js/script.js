// Selectors
const accItemHeaders = document.querySelectorAll(
  ".faq__accordion__item__header"
);

// faq accordion
accItemHeaders.forEach((accItemHeader) => {
  accItemHeader.addEventListener("click", () => {
    const curActiveAccItemHeader = document.querySelector(
      ".faq__accordion__item__header.active"
    );
    if (curActiveAccItemHeader && curActiveAccItemHeader !== accItemHeader) {
      curActiveAccItemHeader.classList.toggle("active");
      curActiveAccItemHeader.nextElementSibling.style.maxHeight = 0;
    }

    accItemHeader.classList.toggle("active");
    const accItemBody = accItemHeader.nextElementSibling;

    accItemBody.style.maxHeight = accItemHeader.classList.contains("active")
      ? accItemBody.scrollHeight + "px"
      : 0;
  });
});
