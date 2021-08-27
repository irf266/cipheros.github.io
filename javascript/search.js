function search() {
    /* Close all opened devices */
    devices = document.getElementsByClassName("device");
    for (i = 0; i < devices.length; i++) {
        status = devices[i].getElementsByClassName("device-header")[0].getAttribute("status");
        if (status == "open") {
            devices[i].getElementsByClassName("device-header")[0].setAttribute("status", "closed");
            devices[i].getElementsByClassName("device-desc")[0].classList.remove("animateDevVisible");
            devices[i].getElementsByClassName("device-desc")[0].classList.add("animateDevHidden");
        }
    }

    input = document.getElementById("searchDevice").value.toUpperCase();
    devices = document.getElementsByClassName("device");
    for (i = 0; i < devices.length; i++) {
        if (devices[i].getElementsByClassName("device-header")[0].innerText.toUpperCase().indexOf(input) > -1) {
            devices[i].style.display = "";
        } else {
            devices[i].style.display = "none";
        }
    }
}