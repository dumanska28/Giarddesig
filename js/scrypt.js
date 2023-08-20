document.addEventListener("DOMContentLoaded", function() {
  const searchIcon = document.querySelector(".search-icon");
  const searchField = document.getElementById("searchField");

  searchIcon.addEventListener("click", function() {
    if (searchField.style.display === "none") {
      searchField.style.display = "block";
    } else {
      searchField.style.display = "none";
    }
  });

  searchField.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      const searchData = searchField.value;
      sendDataToServer(searchData);
      searchField.value = "";
    }
  });
});

function sendDataToServer(data) {
  console.log("Sending data to the server:", data);
}



const masonry = new Macy({
  container: ".images",
  mobileFirst: true,
  columns: 1,
  breakAt: {
    400: 2,
    800: 3
  },
  margin: {
    x: 30,
    y: 30
  },
 trueOrder: false,
 waitForImages: true,
});





const showMoreButton = document.getElementById("showMoreButton");
const galleryContainer = document.querySelector(".gallery");

showMoreButton.addEventListener("click", function () {
    galleryContainer.classList.add("show-images");
    showMoreButton.classList.add("invisible");
});



const modal = document.getElementById("myModal");
const images = document.querySelectorAll(".images img");
const modalImage = document.getElementById("modalImage");
const closeModal = document.querySelector(".close");

images.forEach(image => {
    image.addEventListener("click", function() {
        modalImage.src = this.src;
        modal.style.display = "block";
    });
});

closeModal.addEventListener("click", function() {
    modal.style.display = "none";
});

showMoreButton.addEventListener("click", function() {
    galleryContainer.classList.add("show-images");
    showMoreButton.style.display = "none";
});





