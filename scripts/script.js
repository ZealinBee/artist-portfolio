const spinner = document.querySelector(".spinner-wrapper");
const mainText = document.querySelector(".main-text");
const topText = document.querySelector(".top-text");
const descriptionText = document.querySelector(".description-text-wrapper");
const myTime = document.querySelector(".my-time");
const clipboard = new ClipboardJS(".email-copy");
const clipboardWrapper = document.querySelector(".email-copy");

window.addEventListener("load", function () {
  spinner.classList.add("hidden");
  spinner.addEventListener("transitionend", function () {
    document.body.removeChild(spinner);
  });
  mainText.classList.add("transform-back-x");
  topText.classList.add("transform-back-x");
  descriptionText.classList.add("transform-back-x");
  // Gets the current time in the Philippines
  var d = new Date();
  var utc = d.getTime() + d.getTimezoneOffset() * 60000;
  var nd = new Date(utc + 3600000 * 8);
  var currentDatePhilippines = nd.toLocaleString();
  myTime.textContent = currentDatePhilippines;
});

clipboardWrapper.addEventListener("click", function () {
  clipboardWrapper.classList.add("active");
  setTimeout(function () {
    clipboardWrapper.classList.remove("active");
  }, 2500);
});

window.addEventListener("scroll", function () {
  if (window.pageYOffset > 100) {
    document.querySelector(".pop-up-1").style.transform =
      "translateX(0%)"; /* on-screen position */
    document.querySelector(".pop-up-1").style.opacity =
      "1"; /* on-screen position */
  }
});

const artSections = document.querySelectorAll(".art-section");
const allSectionButton = document.querySelector(".all-button");
allSectionButton.classList.add('selected-button');
filterSection("all");


function filterSection(sectionCategory) {
  artSections.forEach((artSection) => {
    if (
      sectionCategory === "all" ||
      artSection.getAttribute("data-category") === sectionCategory

    ) {
      artSection.style.display = "grid";
    } else {
      artSection.style.display = "none";
    }
  });
}

const filterButtons = document.querySelectorAll('.filter-button')

filterButtons.forEach(filterButton => {
  filterButton.addEventListener('click', e => {
    filterButtons.forEach(filterBtn => filterBtn.classList.remove('selected-button'))
    filterButton.classList.add('selected-button')
    filterSection(e.target.dataset.category)
  })
})

