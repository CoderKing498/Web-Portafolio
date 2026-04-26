console.log("Welcome to my page")

function cambiarColor(){
    const boton= document.querySelector(".myButton");
    let color = getRandomColor();

    boton.style.backgroundColor = color;
}

function getRandomColor() {
    let caracteres = "01234567890ABCDEF"
    color = "#";
    
    for(let i = 0; i < 6; i++){
        color += caracteres[Math.floor(Math.random() * 16)];
    }

    return color;
}
function ShowHide(){
    const container = document.querySelector(".container_2");
    const overlay = document.querySelector(".overlay");

    container.classList.toggle("hidden");
    overlay.classList.toggle("active");
}