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

    // if there's an active header and it's not the one we clicked, close it
    if (curActiveAccItemHeader && curActiveAccItemHeader !== accItemHeader) {
      curActiveAccItemHeader.classList.toggle("active");
      curActiveAccItemHeader.nextElementSibling.style.maxHeight = 0;
    }

    // Make the clicked header active
    accItemHeader.classList.toggle("active");
    const accItemBody = accItemHeader.nextElementSibling;

    // Determine the height of the body of the active question
    accItemBody.style.maxHeight = accItemHeader.classList.contains("active")
      ? accItemBody.scrollHeight + "px"
      : 0;
  });
});


