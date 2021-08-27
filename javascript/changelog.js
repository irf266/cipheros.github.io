function changelog(url, height = "50vh") {
    document.getElementById("changelog_frame").setAttribute("src", url);
    document.getElementsByTagName("iframe")[0].style.height = height;
    document.getElementsByClassName("changelog")[0].style.display = "flex";
    document.getElementsByTagName("body")[0].style.overflow = "hidden";

}

function close_changelog() {
    document.getElementsByClassName("changelog")[0].style.display = "none";
    document.getElementsByTagName("body")[0].style.overflow = "";

}