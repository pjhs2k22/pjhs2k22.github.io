const nav = document.querySelector("header");
window.addEventListener("scroll", () => {
    if (window.pageYOffset > 15) {
        nav.classList.add("scrolled");
    } else {
        nav.classList.remove("scrolled");
    }
});

const dcnico = document.querySelector(".dcnico");
dcnico.addEventListener("click", () => {
    window.alert("Discord : NicoEmina#0446");
});
const telerosa = document.querySelector(".telerosa");
telerosa.addEventListener("click", () => {
    window.alert("Telegram : @Ocaaachaa");
});
const scrosa = document.querySelector(".scrosa");
scrosa.addEventListener("click", () => {
    window.alert("Snapchat : @chaocha06");
});

const morePhotoOne = document.getElementById("more-photo1");
const morePhotoTwo = document.getElementById("more-photo2");
const morePhotoThree = document.getElementById("more-photo3");
const lessPhoto = document.getElementById("less-photo");
const photosMoreOne = document.querySelector(".photos-content.more.one");
const photosMoreTwo = document.querySelector(".photos-content.more.two");
const photosMoreThree = document.querySelector(".photos-content.more.three");

morePhotoOne.addEventListener("click", () => {
    photosMoreOne.style.display = "grid";
    morePhotoTwo.style.display = "block";
    morePhotoOne.style.display = "none";
});

morePhotoTwo.addEventListener("click", () => {
    photosMoreTwo.style.display = "grid";
    morePhotoThree.style.display = "block";
    morePhotoTwo.style.display = "none";
});

morePhotoThree.addEventListener("click", () => {
    photosMoreThree.style.display = "grid";
    lessPhoto.style.display = "block";
    morePhotoThree.style.display = "none";
});

lessPhoto.addEventListener("click", () => {
    photosMoreTwo.style.display = "none";
    photosMoreOne.style.display = "none";
    photosMoreThree.style.display = "none";
    lessPhoto.style.display = "none";
    morePhotoOne.style.display = "block";
});
