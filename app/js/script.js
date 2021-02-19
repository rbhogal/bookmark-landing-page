// Selectors
const accItemHeaders = document.querySelectorAll(
  ".faq__accordion__item__header"
);

const form = document.getElementById("form");
const email = document.getElementById("email");

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

    // Determine the height of the body of the active question
    const accItemBody = accItemHeader.nextElementSibling;
    accItemBody.style.maxHeight = accItemHeader.classList.contains("active")
      ? accItemBody.scrollHeight + "px"
      : 0;
  });
});

// form validation error
form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkEmailInput();
});

function checkEmailInput() {
  const emailValue = email.value.trim();

  if (!isEmail(emailValue)) setError(email);
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}

function setError(email) {
  const formContainer = email.parentElement;


  formContainer.classList.toggle("error");
}
