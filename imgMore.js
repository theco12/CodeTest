const allImageUrls = ["image1.png", "image2.png", "image3.png", "image4.png", "image5.png"];

const imageContainer = document.getElementById("image-container");
const loadMoreButton = document.getElementById("load-more-button");

function createImages(start, end) {
  const imageUrls = allImageUrls.slice(start, end);

  imageUrls.forEach((imageUrl, index) => {
    const img = document.createElement("img");
    img.src = imageUrl;
    img.alt = "Image " + (index + 1);

    const imageWrapper = document.createElement("div");
    imageWrapper.classList.add("image-wrapper");
    imageWrapper.appendChild(img);

    imageContainer.appendChild(imageWrapper);
  });
}

let startIndex = 0;
const imagesPerLoad = 5;

function loadMoreImages() {
  const endIndex = startIndex + imagesPerLoad;
  createImages(startIndex, endIndex);
  startIndex = endIndex;

  if (startIndex >= allImageUrls.length) {
    loadMoreButton.style.display = "none";
  }
}

loadMoreButton.addEventListener("click", loadMoreImages);

// 초기에 5개의 이미지 생성
loadMoreImages();
