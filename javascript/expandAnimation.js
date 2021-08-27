function expandDevice(e) {
    /* Close all opened devices */
    devices = document.getElementsByClassName("device");
    for (i = 0; i < devices.length; i++) {
        status = devices[i].getElementsByClassName("device-header")[0].getAttribute("status");

        /* Skip the device if its the same which was triggered */
        if (e.target != devices[i].getElementsByClassName("device-header")[0]) {
            if (status == "open") {
                devices[i].getElementsByClassName("device-header")[0].setAttribute("status", "closed");
                devices[i].getElementsByClassName("device-desc")[0].classList.remove("animateDevVisible");
                devices[i].getElementsByClassName("device-desc")[0].classList.add("animateDevHidden");
            }
        }
    }
    /* Close or open the triggered device */
    status = e.target.getAttribute("status");
    if (status == "closed") {
        e.target.setAttribute("status", "open");
        e.target.parentElement.getElementsByClassName("device-desc")[0].classList.remove("animateDevHidden");
        e.target.parentElement.getElementsByClassName("device-desc")[0].classList.add("animateDevVisible");

    } else {
        e.target.setAttribute("status", "closed");
        e.target.parentElement.getElementsByClassName("device-desc")[0].classList.remove("animateDevVisible");
        e.target.parentElement.getElementsByClassName("device-desc")[0].classList.add("animateDevHidden");
    }
}