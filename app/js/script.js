////////////////////////////////////////////////////////
/// Feature tabs

// Selectors
const tabs = document.querySelectorAll(".features__tab");
const tabsContainer = document.querySelector(".features__tabs");
const tabsDivs = document.querySelectorAll(".features__tabs__div");
const tabsImgs = document.querySelectorAll(".features__tabs__img");
const tabsContent = document.querySelectorAll(".features__tabs__content");

// 1) Add event listeners
tabsContainer.addEventListener("click", (e) => {
  const clicked = e.target;
  // const tabDiv
  // const tabImg
  // const tabContent

  // 2) Remove active classes on tab, div, img, and text contents
  tabs.forEach((tab) => tab.classList.remove("active"));
  tabsDivs.forEach((div) => div.classList.remove("active"));
  tabsImgs.forEach((img) => img.classList.remove("active"));
  tabsContent.forEach((content) => content.classList.remove("active"));

  // 3) Add active classes to tab, div, img, and content

  // tab
  clicked.classList.add("active");

  // div
  document
    .querySelector(`.features__tabs__divs__div--${clicked.dataset.tab}`)
    .classList.add("active");

  // img
  document
    .querySelector(`.features__tabs__tab-${clicked.dataset.tab}__img`)
    .classList.add("active");

  // text content
  document
    .querySelector(`.features__tabs__tab-${clicked.dataset.tab}__content`)
    .classList.add("active");
});

////////////////////////////////////////////////////////
/// FAQ accordion

// Selectors
const accItemHeaders = document.querySelectorAll(
  ".faq__accordion__item__header"
);

// do event delegation instead of for each
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

////////////////////////////////////////////////////////
/// Form validation error

// Selectors
const form = document.getElementById("form");
const email = document.getElementById("email");

// Global Variables
const formContainer = email.parentElement;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkEmailInput();
});

function checkEmailInput() {
  const emailValue = email.value.trim();

  // Check if email input already has error class and remove it if it does
  if (formContainer.classList.contains("error")) {
    formContainer.classList.toggle("error");
  }

  // If email is not valid give error
  if (!isEmail(emailValue)) setError();
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}

function setError() {
  formContainer.classList.toggle("error");
}
