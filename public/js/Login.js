function redirect() {
    window.location.href = "/signup";
}
document.addEventListener('mousemove', (e) => {
    const eye = document.getElementById('eye');
    const pupil = document.getElementById('pupil');

    const eyeRect = eye.getBoundingClientRect();
    const eyeCenterX = eyeRect.left + eyeRect.width / 2;
    const eyeCenterY = eyeRect.top + eyeRect.height / 2;

    const angle = Math.atan2(e.clientY - eyeCenterY, e.clientX - eyeCenterX);
    const distance = Math.min(eyeRect.width / 4, eyeRect.height / 4);

    const pupilX = distance * Math.cos(angle);
    const pupilY = distance * Math.sin(angle);

    pupil.style.transform = `translate(-50%, -50%) translate(${pupilX}px, ${pupilY}px)`;
});
document.addEventListener('mousemove', (e) => {
    const eye = document.getElementById('eye_b');
    const pupil = document.getElementById('pupil_b');

    const eyeRect = eye.getBoundingClientRect();
    const eyeCenterX = eyeRect.left + eyeRect.width / 2;
    const eyeCenterY = eyeRect.top + eyeRect.height / 2;

    const angle = Math.atan2(e.clientY - eyeCenterY, e.clientX - eyeCenterX);
    const distance = Math.min(eyeRect.width / 4, eyeRect.height / 4);

    const pupilX = distance * Math.cos(angle);
    const pupilY = distance * Math.sin(angle);

    pupil.style.transform = `translate(-50%, -50%) translate(${pupilX}px, ${pupilY}px)`;
});
function Border(element){
    element.classList.add("activeBox");
}
function Remove(element){
    element.classList.remove("activeBox");
}