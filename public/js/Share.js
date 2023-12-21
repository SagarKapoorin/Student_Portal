let share = document.getElementsByClassName("Share");
let share_media = document.getElementsByClassName("share_things");
const ch=() => {
    let computedStyle = window.getComputedStyle(share_media[0]);
    let displayPropertyValue = computedStyle.getPropertyValue("display");
    if (displayPropertyValue === "none") {
        share_media[0].classList.add("display_it");
    } else {
        share_media[0].classList.remove("display_it");
    }
}
share[0].addEventListener("click", ch);
document.addEventListener('DOMContentLoaded', function () {
    const shareBtn = document.getElementById('shareBtn');
    shareBtn.addEventListener('click', function () {
        const currentUrl = encodeURIComponent(window.location.href);
        const twitterUrl = `https://twitter.com/intent/tweet?url=${currentUrl}&text=Check out this awesome website!`;
        window.open(twitterUrl, '_blank');
        ch();
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const shareBtn = document.getElementById('shareBtn_f');

    shareBtn.addEventListener('click', function () {
        const websiteUrl = encodeURIComponent(window.location.href);
        const facebookShareLink = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(websiteUrl)}`;
        window.open(facebookShareLink, '_blank');
        ch();
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const shareBtn = document.getElementById('shareBtn_t');
    shareBtn.addEventListener('click', function () {
        const websiteUrl = encodeURIComponent(window.location.href);
        const telegramShareLink = `https://t.me/share/url?url=${encodeURIComponent(websiteUrl)}`;
        window.open(telegramShareLink, '_blank');
        ch();
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const shareBtnWhatsApp = document.getElementById('shareBtn_w');
    const websiteUrl = encodeURIComponent(window.location.href);
    const textToShare = encodeURIComponent('Check out this awesome website!');

    shareBtnWhatsApp.addEventListener('click', function () {
        const whatsappShareLink = `https://api.whatsapp.com/send?text=${textToShare} ${websiteUrl}`;
        window.open(whatsappShareLink, '_blank');
        ch();
    });
});




