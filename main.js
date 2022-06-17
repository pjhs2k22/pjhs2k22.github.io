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

const morePhoto = document.getElementById("more-photo");
const lessPhoto = document.getElementById("less-photo");
const photosMore = document.querySelector(".photos-content.more");

morePhoto.addEventListener("click", () => {
    photosMore.style.display = "grid";
    lessPhoto.style.display = "block";
    morePhoto.style.display = "none";
});

lessPhoto.addEventListener("click", () => {
    photosMore.style.display = "none";
    lessPhoto.style.display = "none";
    morePhoto.style.display = "block";
});
