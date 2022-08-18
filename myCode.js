function newElement() {
    let myInput = document.getElementById("task").value;
    if (myInput == "") {
        var toastTrigger = document.getElementById('liveToastBtn');
        var toastLiveExample = document.getElementById('liveToast2');
        if (toastTrigger) {
            toastTrigger.addEventListener('click', function () {
            var toast = new bootstrap.Toast(toastLiveExample)

            toast.show()
            });
        }
    }
    if(myInput!="") {
        let liste = document.getElementById("list");
        let li = document.createElement("li");
        let span = document.createElement("span");
        span.setAttribute("class", "close");
        span.setAttribute("onclick", "removeElement(this)");
        span.innerHTML = "x";
        li.textContent = document.getElementById("task").value;
        liste.appendChild(li);
        li.appendChild(span);
        document.getElementById("task").value = "";
        var toastTrigger = document.getElementById('liveToastBtn');
        var toastLiveExample = document.getElementById('liveToast');
        if (toastTrigger) {
            toastTrigger.addEventListener('click', function () {
            var toast = new bootstrap.Toast(toastLiveExample)

            toast.show()
            });
        }
    }
}

function removeElement(e) {
    let liste = document.getElementById("list");
    let li = e.parentElement;
    liste.removeChild(li);
}
