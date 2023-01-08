const rootElement = document.querySelector(".container");
const imageGalleryElement = document.querySelector(".image_gallery");
const filterElement = document.getElementById("search_filter_input");
const imageModal = document.querySelector(".image_modal");
const imageModalText = imageModal.querySelector(".image_description");
const imageMOdalImage = imageModal.querySelector(".card_image");
const addCommentButton = document.querySelector(".add_comment_button");
const commentsElement = document.querySelector(".comments");
const commentInput = document.querySelector(".comment_input");
const nextPageButton = document.getElementById("next_page_button");

let searchFilter = "";

let images = [];
let page = 1;

const setImages = (newImages) => {
    const imageElements = newImages.map(image => createImageListElement(image));
    
    imageElements.forEach(imageElement => {
        imageGalleryElement.appendChild(imageElement)
    });
}

function createImageListElement(image) {
    const imageContainer = document.createElement("div");
    imageContainer.classList.add("image_container");
    imageContainer.classList.add("visible");

    const imageElement = document.createElement("img");
    imageElement.src = image.urls.regular;
    
    const descriptionElement = document.createElement("p");
    descriptionElement.innerText = image["alt_description"];
    
    imageContainer.appendChild(imageElement);
    imageContainer.appendChild(descriptionElement);
    
    imageElement.addEventListener("click", (e) => {
        commentInput.value = "";
        commentsElement.innerHTML = "";
        imageModal.hidden = false;
        imageMOdalImage.src = image.urls.full;
        imageModalText.innerText = image["alt_description"];
    });
    
    return imageContainer;
}

const fetchImages = async () => {
    const fetchedImages = await fetch(`https://api.unsplash.com/photos?client_id=26c22dbaf3df569f2704283a647173f071f9a45d3c870ee216aac157278f474a&page=${page}`);
    const json = await fetchedImages.json();
    images = [...images, ...json];
    
    setImages(json);
}

fetchImages();

imageModal.addEventListener("click", (e) => {
    if (e.target === e.currentTarget) imageModal.hidden = true;
});

filterElement.addEventListener("input", (e) => {
    const imageContainers = Array.from(document.querySelectorAll(".image_container"));
    
    imageContainers.forEach(imageContainer => {
        if(imageContainer.innerText.toLowerCase().includes(e.target.value)) {
            imageContainer.classList.add("visible");
        } else {
            imageContainer.classList.remove("visible");
        }
    })
    
    console.log(e.target.value)
});

addCommentButton.addEventListener("click", (e) => {
    const newCommentElement = document.createElement("p");
    newCommentElement.innerText = commentInput.value;
    
    commentInput.value = "";
    
    commentsElement.appendChild(newCommentElement);
});

nextPageButton.addEventListener("click", (e) => {
    page += 1;
    fetchImages();
})