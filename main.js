const btnSwitch = document.querySelector("#switch");

btnSwitch.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    btnSwitch.classList.contains("label")
    //local storage
    if(document.body.classList.contains("dark")){
        localStorage.setItem("dark-mode", "true");
    } else {
        localStorage.setItem("dark-mode", "false");
    }
});

//localstorage mantener modo en el que estamos
if(localStorage.getItem("dark-mode")=== "true"){
    document.body.classList.add("dark");
} else {
    document.body.classList.remove("dark");
}