status = "closed";

function expandNavbar() {
    if (status == "closed") {
        document.getElementsByClassName("navbar-b")[0].classList.remove("animateHidden");
        document.getElementsByClassName("navbar-b")[0].classList.add("animateVisible");
        status = "open";
    } else {
        document.getElementsByClassName("navbar-b")[0].classList.remove("animateVisible");
        document.getElementsByClassName("navbar-b")[0].classList.add("animateHidden");
        status = "closed";
    }
}