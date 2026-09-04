function startSurprise() {

    document.getElementById("birthday").scrollIntoView({
        behavior: "smooth"
    });

}


function showMessage() {

    const message = document.getElementById("secret-message");

    message.innerHTML =
        "You are one of the best things that ever happened to me. ❤️";

}


function celebrate() {

    alert("Happy Birthday My Love! ❤️🎂🎉");

}