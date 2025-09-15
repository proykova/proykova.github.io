function openModal(videoUrl) {
    document.getElementById("videoFrame").src = videoUrl;
    document.getElementById("videoModal").style.display = "flex";
}

function closeModal() {
    document.getElementById("videoFrame").src = "";
    document.getElementById("videoModal").style.display = "none";
}

window.onclick = function (event) {
    let modal = document.getElementById("videoModal");
    if (event.target === modal) {
        closeModal();
    }
}