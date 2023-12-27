const menu = document.querySelector(".menu")

let mode = true
function openMenu(){
    if(mode == true){
        menu.style.display = "block"
    }else{
        menu.style.display = "none"
    }
    mode = !mode
}







